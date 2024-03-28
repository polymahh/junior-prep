import { NextRequest, NextResponse } from "next/server"
import { jwtVerify } from "jose"

import { Token } from "./types/token"

export default async function isAuthenticated(req: NextRequest) {
  const token = req.cookies.get("_ref__token")?.value as string
  // verify(
  //   token,
  //   process.env.JWT_REFRESH_SECRET as string,
  //   (err, decodedToken) => {
  //     if (err) {
  //       console.log("🚀 ~ isAuthenticated ~ err:", err)
  //       NextResponse.redirect("/login")
  //     } else {
  //       console.log("🚀 ~ verify ~ decodedToken:", decodedToken)
  //       return NextResponse.next()
  //     }
  //   }
  // )

  const { payload }: { payload: Token } = await jwtVerify(
    token,
    new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
  )

  console.log("🚀 ~ isAuthenticated ~ payload:", payload)
  return NextResponse.next()
}

export const config = {
  matcher: ["/api/users/:path*", "/api/teams/:path*"],
}
