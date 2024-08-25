import Providers from "@/src/components/Providers"
import { authOptions } from "@/src/lib/auth"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { Inter } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Next.js App",
	description: "Next.js App Description",
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
					<main>{children}</main>
				</Providers>
			</body>
		</html>
	)
}
