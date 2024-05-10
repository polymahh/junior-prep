import { jwtVerify } from "jose"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
    const cookieStore = cookies()
    const token = cookieStore.get("_acc__token")

    if (!token) {
        return NextResponse.json({ message: "not loged in!" }, { status: 401 })
    }

    const { payload: user } = await jwtVerify(token.value, new TextEncoder().encode(process.env.JWT_REFRESH_SECRET))

    return NextResponse.json(
        {
            user,
        },
        { status: 200 },
    )
}
