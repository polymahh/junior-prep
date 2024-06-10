export { default } from "next-auth/middleware"

export const config = {
    matcher: ["/dashboard/:path*", "/api/users/:path*", "/api/teams/:path*", "/api/language/:path*"],
}
