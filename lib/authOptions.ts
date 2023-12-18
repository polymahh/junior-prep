import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";
import { NextAuthOptions } from "next-auth";
import { compare } from "bcrypt";


export const authOptions : NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    adapter: PrismaAdapter(db),
    session:{
        strategy: "jwt"
    },
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        }
      }),
      GitHubProvider({
        clientId: process.env.GITHUB_ID as string,
        clientSecret: process.env.GITHUB_SECRET as string,
        profile(profile) {
          return {
            id: profile.id.toString(),
            name: profile.name || profile.login,
            email: profile.email,
            image: profile.avatar_url,
            username: profile.login,
          }  ;
        },


      }),
      CredentialsProvider({
        name: "Credentials",
        // `credentials` is used to generate a form on the sign in page.
        // You can specify which fields should be submitted, by adding keys to the `credentials` object.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "email", placeholder: "email@gmail.com" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {

            if(!credentials?.email || !credentials.password){
                return null
            }
            const existingUser = await db.user.findUnique({
                where:{email:credentials?.email}
            })

            if(!existingUser){
                return null
            }

            if(existingUser.password){
              const passwordMatch = compare(existingUser.password, credentials.password)
              if(!passwordMatch){
                  return null
              }
            }
            return {
                id: `${existingUser.id}`,
                username: existingUser.username,
                email: existingUser.email,
            }
    
       
        }
      })
    ],

    callbacks:{

      async jwt({token,user,session}){
        console.log("jwt", user, token,session)
        return token
      },
      async session({token,user,session}){
        console.log("session", user, token,session)
        return session
      },

    },
    pages: {
      signIn: '/login',
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      // verifyRequest: '/auth/verify-request', // (used for check email message)
      // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
  
  };