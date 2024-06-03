import { db } from "@/db"
import { extractPayload, generateVerifyToken } from "@/lib/jwt-tokens"
import { newPasswordEmail } from "@/lib/mailer"
import { changePasswordSchema, emailSchema } from "@/lib/validators/auth"
import { genSalt, hash } from "bcrypt"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { email } = emailSchema.parse(body)

    const user = await db.user.findUnique({ where: { email } })
    if (!user) return NextResponse.json({ message: "Email not found" }, { status: 404 })

    const userPass = user.password?.slice(-6)

    const token = await generateVerifyToken(email, (process.env.JWT_VERIFY_SECRET + userPass!) as string)

    try {
        // send the email
        await newPasswordEmail(email, token)
        return NextResponse.json({ message: "Email sent" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    const body = await req.json()

    const { email, token, password } = changePasswordSchema.parse(body)

    if (!email || !token || !password) return NextResponse.json({ message: "Missing params!" }, { status: 400 })

    const user = await db.user.findUnique({ where: { email } })
    if (!user) return NextResponse.json({ message: "Email not found" }, { status: 404 })

    const userPass = user.password?.slice(-6)
    try {
        const payload = await extractPayload(token, (process.env.JWT_VERIFY_SECRET + userPass!) as string, false)
        if (!payload) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

        const salt = await genSalt(10)
        const hashedPassword = await hash(password, salt)

        await db.user.update({
            where: { email },
            data: {
                password: hashedPassword,
            },
        })

        const cookieStore = cookies()

        cookieStore.delete("_acc__token")
        cookieStore.delete("_ref__token")

        return NextResponse.json({ message: "password chnaged successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
