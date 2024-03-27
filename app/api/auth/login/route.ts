import { NextResponse } from "next/server"
import { db } from "@/db"
import { compare } from "bcrypt"

import { generateAccessToken, generateRefreshToken } from "@/lib/jwt-tokens"

export async function Post(req: Request) {
  const { email, password } = await req.json()

  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    })

    if (!existingUser) {
      return NextResponse.json(
        { message: "Email or password is incorrect!" },
        { status: 401 }
      )
    }

    if (existingUser.password) {
      const passwordMatch = compare(existingUser.password, password)
      if (!passwordMatch) {
        return null
      }
    }

    const accessToken = generateAccessToken(
      existingUser.id,
      existingUser.username || "test"
    )
    const refreshToken = generateRefreshToken(
      existingUser.id,
      existingUser.username || "test"
    )

    const next = NextResponse.next()

    next.cookies.set({
      name: "_ref__token",
      value: refreshToken,
      secure: true,
      httpOnly: true,
      sameSite: "strict",
      expires: new Date(Date.now() + 2592000000), //how many seconds until it expires in ms (30 days)
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
