import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import Providers from "../components/Providers"
import TopNav from "../components/TopNav"
import { authOptions } from "../lib/auth"
import "./globals.css"

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js App Description",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions)

	return (
		<html lang="en">
			<body>
				<Providers session={session}>
					<TopNav />
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	)
}
