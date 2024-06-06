import { db } from "@/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { compare } from "bcrypt"
import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"

export const authOptions: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
            allowDangerousEmailAccountLinking: true,
            profile(profile) {
                return {
                    id: profile.id,
                    name: profile.name,
                    email: profile.email,
                    username: profile.login,
                    image: profile.avatar_url,
                    provider: "github",
                }
            },
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                console.log("🚀 ~ authorize ~ credentials:", credentials)
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Invalid credentials")
                }
                const existingUser = await db.user.findUnique({
                    where: { email: credentials?.email },
                })

                if (!existingUser || !existingUser?.password) {
                    throw new Error("Invalid credentials")
                }

                const passwordMatch = compare(existingUser.password, credentials.password)
                if (!passwordMatch) {
                    throw new Error("Invalid credentials")
                }
                return {
                    id: `${existingUser.id}`,
                    username: existingUser.username,
                    email: existingUser.email,
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.username = user.username
                token.id = user.id
            }
            return token
        },

        session({ token, session, user }) {
            if (token && session.user) {
                session.user.username = token.username as string
                session.user.id = token.id as string
            }
            return session
        },
        async signIn({ user, account, profile, email }) {
            console.log("🚀 ~ signIn ~ user:", user, account, profile)
            return true
            //     if (account?.provider === "github") {
            //         const email = profile?.email
            //         const existingUser = await db.user.findUnique({
            //             where: { email },
            //         })

            //         if (existingUser) {
            //             // Link GitHub account to existing user
            //             throw new Error("Email used Connect with password")

            //         } else {
            //             // Create a new user with the GitHub account
            //             await db.user.create({
            //                 data: {
            //                     email: email as string,
            //                     name: account.name as string,
            //                     username: account.login as string,
            //                     image: account.avatar_url as string,
            //                     provider: account.provider as provider,
            //                     githubConnected: new Date().toISOString(),
            //                 },
            //             })

            //             return true
            //         }
            //     }
            //     return true
        },
    },
    pages: {
        signIn: "/login",
        signOut: "/auth/signout",
        error: "/auth/error", // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    },
}
