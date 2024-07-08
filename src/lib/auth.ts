import prisma from "@/src/lib/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { SessionStrategy } from "next-auth"
import GitHubProvider from "next-auth/providers/github"

declare module "next-auth" {
	interface Session {
		user: {
			id: string
			name: string
			email: string
			role: string
			image: string
		}
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string
		name: string
		email: string
		role: string
		image: string
	}
}

export const authOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
			allowDangerousEmailAccountLinking: true,
		}),
	],
	session: {
		strategy: "database" as SessionStrategy,
	},
	callbacks: {
		async session({ session, user }) {
			if (user) {
				session.user.id = user.id
				session.user.name = user.name
				session.user.email = user.email
				session.user.role = user.role
				session.user.image = user.image
			}
			return session
		},
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id
				token.name = user.name
				token.email = user.email
				token.role = user.role
				token.image = user.image
			} else {
				const dbUser = await prisma.user.findFirst({
					where: { email: token.email },
				})
				if (dbUser) {
					token.id = dbUser.id
					token.name = dbUser.name
					token.email = dbUser.email
					token.role = dbUser.role
					token.image = dbUser.image
				}
			}
			return token
		},
	},
	adapter: PrismaAdapter(prisma),
}
