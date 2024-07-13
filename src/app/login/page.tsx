"use client"

import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LoginPage() {
	const { status } = useSession()
	if (status === "authenticated") {
		redirect("/")
	}

	return (
		<main className="flex flex-col items-center justify-center">
			<div className="mb-6 flex flex-col items-center">
				<strong className="mb-2 text-4xl">Sign In</strong>
				<p>Choose your credentials provider</p>
			</div>

			<div className="flex flex-col">
				<button className="button m-2" onClick={() => signIn("github")}>
					Sign In With GitHub
				</button>
				<button className="button m-2" onClick={() => signIn("google")}>
					Sign In With Google
				</button>
			</div>
		</main>
	)
}
