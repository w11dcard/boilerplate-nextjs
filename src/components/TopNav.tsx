"use client"

import { Icon } from "@iconify/react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function ThemeButton() {
	const [theme, setTheme] = useState("light")

	const toggleTheme = () => setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))

	useEffect(() => {
		document.documentElement.classList.toggle("dark", theme === "dark")
	}, [theme])

	return (
		<button onClick={toggleTheme} className="button h-8 w-8">
			<Icon icon={theme === "light" ? "material-symbols:light-mode-rounded" : "material-symbols:dark-mode-rounded"} />
		</button>
	)
}

export default function TopNav() {
	const { data: session } = useSession()

	return (
		<nav className="mb-8 flex items-center justify-between px-4 py-2 shadow-md">
			<div className="flex items-center space-x-2">
				<Link className="button" href="/">
					Home
				</Link>
			</div>

			<div className="flex items-center space-x-2">
				<ThemeButton />
				{session ? (
					<>
						<button onClick={() => signOut()} className="button">
							Sign Out
						</button>
						{session.user.image && (
							<Image src={session.user.image} alt={session.user.name} width={45} height={45} className="avatar" />
						)}
					</>
				) : (
					<Link href="/login" className="button">
						Sign In
					</Link>
				)}
			</div>
		</nav>
	)
}
