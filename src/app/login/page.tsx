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
			<div className="flex flex-col rounded border border-muted">
				<div className="px-32 pb-6 pt-12">
					<strong className="text-5xl">Sign In</strong>
					<p className="mt-4 font-light">Sign in with your preferred provider</p>
				</div>

				<div className="flex flex-col items-center justify-center p-4">
					<button className="button-login bg-github m-2" onClick={() => signIn("github")}>
						Sign In With GitHub
					</button>
					<button className="button-login bg-google m-2" onClick={() => signIn("google")}>
						Sign In With Google
					</button>
				</div>
			</div>
		</main>
	)
}
