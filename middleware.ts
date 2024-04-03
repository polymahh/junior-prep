import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

import { Token } from "./types/token"

export default async function isAuthenticated(req: NextRequest) {
  const cookieStore = cookies()
  const token = cookieStore.get("_acc__token")?.value

  if (!token) return NextResponse.redirect(new URL(`/login`, req.url))

  try {
    const { payload }: { payload: Token } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
    )

    return NextResponse.next()
  } catch (error) {
    console.log("🚀 ~ isAuthenticated ~ error:", error)
    return NextResponse.redirect(new URL(`/login`, req.url))
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/api/users/:path*", "/api/teams/:path*"],
}
