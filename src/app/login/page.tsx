"use client"

import { signIn, useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function LoginPage() {
	const { status } = useSession()

	if (status === "authenticated") {
		redirect("/")
	}

	return (
		<div className="flex flex-col items-center justify-center">
			<div className="w-full max-w-md rounded p-4 shadow-md">
				<div className="flex flex-col items-center justify-center px-8 py-10 text-center">
					<strong className="text-5xl">Sign In</strong>
					<p className="mt-4 text-lg text-muted-foreground ">Sign in with your preferred provider</p>
				</div>

				<div className="flex flex-col items-center justify-center p-4">
					<button className="button-signin m-2 bg-github" onClick={() => signIn("github")}>
						Sign In With GitHub
					</button>
					<button className="button-signin m-2 bg-google" onClick={() => signIn("google")}>
						Sign In With Google
					</button>
				</div>
			</div>
		</div>
	)
}
