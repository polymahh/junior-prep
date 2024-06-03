import { db } from "@/db"
import { jwtVerify } from "jose"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
    try {
        const cookieStore = cookies()
        const accessToken = cookieStore.get("_acc__token")?.value
        if (!accessToken) {
            return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
        }
        const { payload } = await jwtVerify(accessToken, new TextEncoder().encode(process.env.JWT_REFRESH_SECRET))

        const today = new Date()
        const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000) // Subtract 7 days in milliseconds

        const sevenDaysActivity = await db.user.findUnique({
            where: {
                id: payload.id as string,
            },
            select: {
                TimeSpent: {
                    where: {
                        createdAt: {
                            gte: sevenDaysAgo,
                            lte: today,
                        },
                    },
                },
            },
        })

        return NextResponse.json({ sevenDaysActivity, message: "last 7 days activity" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
