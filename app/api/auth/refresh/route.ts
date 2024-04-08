import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { NextResponse } from "next/server"
import { db } from "@/db"
import { jwtVerify } from "jose"

import { Token } from "@/types/token"
import { generateAccessToken } from "@/lib/jwt-tokens"
import { urlCallback } from "@/lib/utils"

export async function POST(req: Request) {
  try {
    const tokens = cookies()
    const refreshToken = tokens.get("_ref__token")?.value
    console.log("🚀 ~ POST route ~ refreshToken:", refreshToken)

    if (refreshToken) {
      const { payload }: { payload: Token } = await jwtVerify(
        refreshToken,
        new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
      )
      const user = await db.user.findUnique({
        where: { id: payload.id },
      })

      if (!user)
        return NextResponse.json({ message: "not authorized" }, { status: 404 })

      const accessToken = await generateAccessToken(user.id, user.email)
      const newRefreshToken = await generateAccessToken(user.id, user.email)

      cookies().set({
        name: "_acc__token",
        value: accessToken,
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        expires: new Date(
          Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
        ), //expires in (15 min)
      })

      cookies().set({
        name: "_ref__token",
        value: newRefreshToken,
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        expires: new Date(
          Date.now() + Number(process.env.REFRESH_TOKEN_EXPIRES_IN)
        ), //expires in (30 days)
      })
      return NextResponse.json({ user, accessToken }, { status: 200 })
    } else {
      return Response.redirect(new URL("/login", req.url))
    }
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    )
  }
}
