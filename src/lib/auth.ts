import prisma from "@/src/lib/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { SessionStrategy } from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

declare module "next-auth" {
	interface Session {
		user: {
			id: string
			name: string
			email: string
			image: string
		}
	}
}

export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
			allowDangerousEmailAccountLinking: true,
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_ID ?? "",
			clientSecret: process.env.GOOGLE_SECRET ?? "",
			allowDangerousEmailAccountLinking: true,
		}),
	],
	session: {
		strategy: "database" as SessionStrategy,
	},
	callbacks: {
		async session({ session, user }) {
			if (user) {
				session.user = { ...user } // Copy user data to session
			}
			return session
		},
		async jwt({ token, user }) {
			if (user) {
				token = { ...user } // Copy user data to token
			} else {
				const dbUser = await prisma.user.findFirst({
					where: { email: token.email },
				})
				if (dbUser) {
					token = { ...dbUser } // Copy dbUser data to token
				}
			}
			return token
		},
		async signIn({ account }) {
			if (account) {
				account.accessToken = account.access_token
				account.tokenType = account.token_type
				delete account.access_token
				delete account.token_type
			}
			return true
		},
	},
}
