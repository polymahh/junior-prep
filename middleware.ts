import { extractPayload, generateAccessToken } from "./lib/jwt-tokens"
import { User } from "./types/user"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export default async function middleware(req: NextRequest) {
    const cookieStore = cookies()
    const accessToken = cookieStore.get("_acc__token")?.value
    const refreshToken = cookieStore.get("_ref__token")?.value
    const pathname = req.nextUrl.pathname

    const unauthorizedReturn = pathname.startsWith("/api")
        ? NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        : NextResponse.redirect(new URL("/login", req.url))

    if (!accessToken) return unauthorizedReturn

    try {
        const payload = await extractPayload(accessToken, process.env.JWT_ACCESS_SECRET as string, false)

        if (typeof payload === "boolean") {
            if (!refreshToken) return unauthorizedReturn

            const refreshPayload = await extractPayload(refreshToken, process.env.JWT_REFRESH_SECRET as string, false)

            if (typeof refreshPayload === "boolean") return unauthorizedReturn

            const newAccessToken = await generateAccessToken({
                id: refreshPayload.id,
                email: refreshPayload.email,
                username: refreshPayload.username,
                image: refreshPayload.image,
            } as User)

            const headers = new Headers(req.headers)
            headers.set("x-user-data", JSON.stringify({ id: refreshPayload.id, email: refreshPayload.email }))

            const response = NextResponse.next({ request: { headers } })

            response.cookies.set({
                name: "_acc__token",
                value: newAccessToken,
                secure: true,
                httpOnly: true,
                sameSite: "lax",
                expires: new Date(Date.now() + Number(process.env.ACCESS_TOKEN_EXPIRES_IN)),
            })

            return response
        }

        const headers = new Headers(req.headers)
        headers.set("x-user-data", JSON.stringify({ id: payload.id, email: payload.email }))

        return NextResponse.next({ request: { headers } })
    } catch (error) {
        return unauthorizedReturn
    }
}

export const config = {
    matcher: ["/api/language/:path*", "/api/teams/:path*", "/dashboard/:path*"],
}
