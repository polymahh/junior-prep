import { NextRequest } from "next/server"

export function isAuthenticated(req: NextRequest) {
  console.log(req.cookies)
}

export const config = {
  matcher: ["/api/users/:path*", "/api/teams/:path*"],
}
