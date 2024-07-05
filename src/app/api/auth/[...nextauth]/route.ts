import prisma from "@/src/lib/db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { SessionStrategy } from "next-auth"
import GitHubProvider from "next-auth/providers/github"

export const authOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
	],
	session: {
		strategy: "jwt" as SessionStrategy,
	},
	callbacks: {
		async session({ token, session }) {
			if (token) {
				session.user.id = token.id
				session.user.name = token.name
				session.user.email = token.email
				session.user.role = token.role
				session.user.image = token.picture
			}

			return session
		},
		async jwt({ token, user }) {
			const dbUser = await prisma.user.findFirst({
				where: {
					email: token.email,
				},
			})
			if (!dbUser) {
				token.id = user!.id
				return token
			}

			return {
				id: dbUser.id,
				name: dbUser.name,
				email: dbUser.email,
				role: dbUser.role,
				picture: dbUser.image,
			}
		},
	},
	adapter: PrismaAdapter(prisma),
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
