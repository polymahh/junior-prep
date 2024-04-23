import { cookies, headers } from "next/headers"
import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"
import { errors, jwtVerify } from "jose"

import { generateAccessToken } from "./lib/jwt-tokens"

export default async function isAuthenticated(req: NextRequest) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("_acc__token")?.value
  const refreshToken = cookieStore.get("_ref__token")?.value

  async function isValidAccessToken() {
    try {
      if (!accessToken) {
        return false
      }
      await jwtVerify(
        accessToken,
        new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
      )
      console.log("valid access token")
      return true
    } catch (err) {
      console.log("invalid access token")
      return false
    }
  }
  async function isValidRefreshToken() {
    try {
      if (!refreshToken) {
        return null
      }
      const { payload } = await jwtVerify(
        refreshToken,
        new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
      )
      console.log("valid refresh token")
      return payload
    } catch (err) {
      console.log("invalid refresh token")
      return null
    }
  }

  try {
    if (await isValidAccessToken()) {
      return NextResponse.next()
    } else {
      const payload = await isValidRefreshToken()

      if (!payload) {
        console.log(
          "🚀 ~ isAuthenticated ~ !refreshToken || invalidRefreshToken:"
        )
        // return NextResponse.redirect(new URL("/login", req.url))

        return NextResponse.redirect(new URL("/login", req.url))

        // response.cookies.delete("_ref__token")
        // response.cookies.delete("_acc__token")

        // return response.json({ message: "invalid refresh token" },{ status: 202 })

        // return NextResponse.rewrite(new URL("/login", req.url))
        // return NextResponse.rewrite(new URL("/login", req.url))
      }
      const newAccessToken = await generateAccessToken(
        payload.id as string,
        payload.email as string
      )
      console.log("valid refresh token and generated new access token")
      const response = NextResponse.next()
      response.cookies.set({
        name: "_acc__token",
        value: newAccessToken,
        secure: true,
        httpOnly: true,
        sameSite: "strict",
        expires: new Date(
          Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
        ),
      })

      return response
    }
  } catch (error) {
    console.log("err", error)
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 500 }
    )
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/users/:path*",
    "/api/teams/:path*",
    "/api/language/:path*",
  ],
}
