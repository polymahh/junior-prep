import { db } from "@/db"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt-tokens"
import { loginSchema } from "@/lib/validators/auth"
import { compare } from "bcrypt"
import { NextApiResponse } from "next"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request, res: NextApiResponse) {
    try {
        const body = await req.json()
        //validation
        const { email, password } = loginSchema.parse(body)
        console.log("🚀 ~ POST ~ email:", email)

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
        console.log("🚀 ~ POST ~ existingUser:", existingUser)

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
        console.log("🚀 ~ file: login route.ts:80 ~ POST ~ error:", error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
