import { NextResponse } from "next/server"
import { db } from "@/db"
import { compare } from "bcrypt"

import { generateAccessToken, generateRefreshToken } from "@/lib/jwt-tokens"

export async function Post(req: Request) {
  const { email, password } = await req.json()

  try {
    const existingUser = await db.user.findUnique({
      where: { email, provider: "LOCAL" },
    })

    if (!existingUser) {
      return NextResponse.json(
        { message: "Email or password is incorrect!" },
        { status: 401 }
      )
    }

    const passwordMatch = compare(existingUser.password!, password)
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Email or password is incorrect!" },
        { status: 401 }
      )
    }

    const accessToken = await generateAccessToken(
      existingUser.id,
      existingUser.email
    )
    const refreshToken = await generateRefreshToken(
      existingUser.id,
      existingUser.email
    )

    const next = NextResponse.next()

    next.cookies.set({
      name: "_ref__token",
      value: refreshToken,
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 2592000000), //expires in (30 days)
    })
    return NextResponse.json(
      { user: existingUser, accessToken },
      { status: 200 }
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:45 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
