import { db } from "@/db"
import { extractPayload, generateVerifyToken } from "@/lib/jwt-tokens"
import { sendverificationEmail } from "@/lib/mailer"
import { emailSchema, verifyRequestSchema } from "@/lib/validators/auth"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.json()
    const { email } = emailSchema.parse(body)

    const token = await generateVerifyToken(email, process.env.JWT_VERIFY_SECRET as string)

    try {
        // store token
        await db.verificationToken.upsert({
            where: { email },
            update: { token },
            create: {
                email,
                token,
            },
        })
        // send the email
        await sendverificationEmail(email, token)
        return NextResponse.json({ message: "Email sent" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function PUT(req: NextRequest) {
    const body = await req.json()

    const { email, token } = verifyRequestSchema.parse(body)

    if (!email || !token) return NextResponse.json({ message: "Missing params!" }, { status: 404 })
    try {
        const payload = await extractPayload(token, process.env.JWT_VERIFY_SECRET as string, false)
        if (!payload) return NextResponse.json({ message: "Unauthorized" }, { status: 401 })

        const userEmail = await db.user.update({
            where: { email, emailVerified: null },
            data: {
                emailVerified: new Date(),
            },
        })
        if (!userEmail)
            return NextResponse.json(
                { message: "Email already verified or not existing , please Login" },
                { status: 200 },
            )

        return NextResponse.json({ message: "Email verified" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
