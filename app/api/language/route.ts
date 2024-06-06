import { db } from "@/db"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET() {
    const session = await getServerSession()
    console.log("🚀 ~ GET ~ session:", session)

    if (!session) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })

    try {
        const today = new Date()
        const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000) // Subtract 7 days in milliseconds

        const sevenDaysActivity = await db.user.findUnique({
            where: {
                email: session?.user.email as string,
            },
            select: {
                timeSpent: {
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
