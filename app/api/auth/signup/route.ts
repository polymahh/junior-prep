import { NextResponse } from "next/server"
import { db } from "@/db"
import { provider } from "@prisma/client"
import { compare, genSalt, hash } from "bcrypt"

import { generateAccessToken, generateRefreshToken } from "@/lib/jwt-tokens"

export async function POST(req: Request) {
  const { email, password, confirmPassword } = await req.json()

  try {
    const existingEmail = await db.user.findUnique({
      where: { email },
    })

    if (existingEmail) {
      return NextResponse.json(
        { message: "This email is already in use" },
        { status: 401 }
      )
    }

    const passwordMatched = password === confirmPassword

    if (!passwordMatched) {
      return NextResponse.json(
        { message: "Passwords don't match" },
        { status: 401 }
      )
    }

    const salt = await genSalt(10)
    const hashedPassword = await hash(password, salt)
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        provider: "LOCAL" as provider,
      },
    })

    const accessToken = await generateAccessToken(user.id, user.email)
    const refreshToken = await generateRefreshToken(user.id, user.email)

    const next = NextResponse.next()

    next.cookies.set({
      name: "_ref__token",
      value: refreshToken,
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 2592000000), //expires in (30 days)
    })
    return NextResponse.json({ user: user, accessToken }, { status: 200 })
  } catch (error) {
    console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
