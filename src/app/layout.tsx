import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { Inter } from "next/font/google"
import Providers from "../components/context/Providers"
import Footer from "../components/Footer"
import TopNav from "../components/TopNav"
import { authOptions } from "../lib/auth"
import "../styles/globals.css"

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js Boilerplate website.",
}

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const session = await getServerSession(authOptions)

	return (
		<html lang="en" className={inter.className}>
			<body>
				<Providers session={session}>
					<TopNav />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
