"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "./ui/button"

function AuthButton() {
	const { data: session } = useSession()

	return (
		<div className="flex items-center space-x-4">
			{session ? (
				<>
					<span>{session.user?.name}</span>
					<Button onClick={() => signOut()} className="rounded-full border px-4 py-2 font-semibold">
						Sign Out
					</Button>
				</>
			) : (
				<Button onClick={() => signIn()} className="rounded-full border px-4 py-2 font-semibold">
					Sign In
				</Button>
			)}
		</div>
	)
}

export default function TopNav() {
	return (
		<nav className="flex items-center justify-between px-4 py-2">
			<div className="flex items-center space-x-4 font-bold">
				<Link href="/">Home</Link>
			</div>
			<AuthButton />
		</nav>
	)
}
