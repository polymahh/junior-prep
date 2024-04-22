import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { errors, jwtVerify } from "jose"

import { generateAccessToken } from "./lib/jwt-tokens"

export default async function isAuthenticated(req: NextRequest) {
  const cookieStore = cookies()
  const accessToken = cookieStore.get("_acc__token")?.value
  const refreshToken = cookieStore.get("_ref__token")?.value
  let invalidAccessToken = false
  let invalidRefreshToken = false

  if (accessToken) {
    try {
      const { payload } = await jwtVerify(
        accessToken,
        new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
      )
      console.log("valid access token")
      return NextResponse.next()
    } catch (err) {
      console.log("invalid access token")
      invalidAccessToken = true
    }
  } else {
    console.log("no access token")
    invalidAccessToken = true
  }

  if (invalidAccessToken) {
    if (refreshToken) {
      console.log("🚀 ~ isAuthenticated ~ refreshToken:", refreshToken)
      try {
        const { payload } = await jwtVerify(
          refreshToken,
          new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
        )
        const accessToken = await generateAccessToken(
          payload.id as string,
          payload.email as string
        )

        console.log("valid refresh token and generated new access token")

        const response = NextResponse.next()
        response.cookies.set({
          name: "_acc__token",
          value: accessToken,
          secure: true,
          httpOnly: true,
          sameSite: "strict",
          expires: new Date(
            Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRES_IN)
          ),
        })

        return response
      } catch (err) {
        console.log("invalid refresh token", err)
        invalidRefreshToken = true
      }
    }

    if (!refreshToken || invalidRefreshToken) {
      console.log(
        "🚀 ~ isAuthenticated ~ !refreshToken || invalidRefreshToken:"
      )
      return NextResponse.redirect(new URL("/login", req.url))
    }
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
