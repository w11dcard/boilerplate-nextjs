"use client"

import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LoginPage() {
	const { data: session, status } = useSession()
	if (status === "authenticated") {
		redirect("/")
	}

	return (
		<main className="w-md flex flex-col items-center justify-center">
			<h1 className="mb-4 text-5xl font-bold">Sign In</h1>
			<p className="text-lg">Choose your credentials provider</p>
			<div className="mb-5 flex flex-col">
				<button className="button m-8" onClick={() => signIn("github")}>
					Sign In With GitHub
				</button>
			</div>
		</main>
	)
}
