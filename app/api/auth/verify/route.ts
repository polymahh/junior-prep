import { NextResponse } from "next/server"
import { db } from "@/db"
import nodemailer from "nodemailer"

import { generateVerifyToken } from "@/lib/jwt-tokens"
import { emailSchema } from "@/lib/validators/auth"

export async function POST(req: Request) {
  const body = await req.json()
  console.log("🚀 ~ POST ~ body:", body)
  const { email } = emailSchema.parse(body)

  const token = await generateVerifyToken(email)

  const transporter: nodemailer.Transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 0,
    auth: {
      user: process.env.SMTP_AUTH_USER,
      pass: process.env.SMTP_AUTH_PASS,
    },
  })

  // the content of the email
  const emailData = {
    from: '"Blog Nextjs Auth" <verification@test.com>',
    to: email,
    subject: "Email Verification",
    html: `
        <p>Click the link below to verify your email:</p>
        <a href="http://localhost:3000/verify?email=${email}&token=${token}">Verify Email</a>
        `,
  }

  try {
    // store token
    await db.verificationToken.create({
      data: {
        email,
        token,
      },
    })
    // send the email
    await transporter.sendMail(emailData)
  } catch (error) {
    console.error("Failed to send email:", error)
    throw error
  }

  return NextResponse.json({ message: "Email sent" }, { status: 200 })
}
