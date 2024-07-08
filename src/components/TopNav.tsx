"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

function AuthButton() {
	const { data: session } = useSession()

	return (
		<div className="flex items-center space-x-4">
			{session ? (
				<>
					<span>{session.user?.name}</span>
					<button onClick={() => signOut()} className="button">
						Sign Out
					</button>
				</>
			) : (
				<button onClick={() => signIn()} className="button">
					Sign In
				</button>
			)}
		</div>
	)
}

export default function TopNav() {
	return (
		<nav className="flex items-center justify-between px-4 py-2">
			<div className="flex items-center space-x-4 font-bold">
				<Link className="button" href="/">
					Home
				</Link>
			</div>
			<AuthButton />
		</nav>
	)
}
