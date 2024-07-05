import SessionProvider from "@/src/components/SessionProvider"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import TopNav from "../components/TopNav"
import "./globals.css"

export const metadata: Metadata = {
	title: "Next App",
	description: "Next App Description",
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession()

	return (
		<html lang="en">
			<body>
				<SessionProvider session={session}>
					<TopNav />
					<main className="">{children}</main>
				</SessionProvider>
			</body>
		</html>
	)
}
