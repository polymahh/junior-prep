import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { db } from "@/db"
import { provider } from "@prisma/client"
import { genSalt, hash } from "bcrypt"

import { generateAccessToken, generateRefreshToken } from "@/lib/jwt-tokens"
import { registerSchema } from "@/lib/validators/auth"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    //validation
    const { email, password } = registerSchema.parse(body)

    const existingEmail = await db.user.findUnique({
      where: { email },
    })

    if (existingEmail) {
      return NextResponse.json(
        { message: "This email is already in use" },
        { status: 401 }
      )
    }

    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)

    const username = `Junior-${Math.random().toString(36).slice(2)}`
    const user = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        provider: "LOCAL" as provider,
      },
      select: {
        email: true,
        username: true,
      },
    })

    return NextResponse.json({ user: user }, { status: 200 })
  } catch (error) {
    console.log("🚀 ~ file: route.ts:65 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
