import { db } from "@/db"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt-tokens"
import { loginSchema } from "@/lib/validators/auth"
import { compare } from "bcrypt"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const body = await req.json()
        // TODO: validation
        const { email, password } = loginSchema.parse(body)

        const existingUser = await db.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                username: true,
                image: true,
                password: true,
            },
        })

        if (!existingUser) {
            return NextResponse.json({ message: "Email or password is incorrect!" }, { status: 401 })
        }

        const { password: userPassword, ...user } = existingUser

        const passwordMatch = await compare(password, userPassword as string)

        if (!passwordMatch) {
            return NextResponse.json({ message: "Email or password is incorrect!" }, { status: 401 })
        }

        const accessToken = await generateAccessToken(user)
        const refreshToken = await generateRefreshToken(user)

        cookies().set({
            name: "_acc__token",
            value: accessToken,
            secure: true,
            httpOnly: true,
            sameSite: "strict",
            expires: new Date(Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRES_IN)), //expires in (15 min)
        })

        cookies().set({
            name: "_ref__token",
            value: refreshToken,
            secure: true,
            httpOnly: true,
            sameSite: "strict",
            expires: new Date(Date.now() + Number(process.env.REFRESH_TOKEN_EXPIRES_IN)), //expires in (30 days)
        })

        return NextResponse.json({ user: user }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
