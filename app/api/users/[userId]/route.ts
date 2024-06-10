import { db } from "@/db"
import { userSchema } from "@/lib/validators/users"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { userId: string } }) {
    console.log("🚀 ~ file: route.ts:8 ~ GET ~ params:", params)
    try {
        const { userId } = params

        if (!userId) {
            return NextResponse.json(
                {
                    message: "Missing user Id",
                },
                {
                    status: 400,
                },
            )
        }

        const user = await db.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                username: true,
                image: true,
            },
        })

        if (!user) {
            return NextResponse.json({ message: "Missing user" }, { status: 400 })
        }

        return NextResponse.json({ user: user, message: "user found" }, { status: 201 })
    } catch (error) {
        console.log("🚀 ~ file: userid route.ts:45 ~ POST ~ error:", error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function PUT(req: Request, { params }: { params: { userId: string } }) {
    try {
        const { userId } = params

        if (!userId) {
            return NextResponse.json({ message: "Missing user Id" }, { status: 400 })
        }

        const body = req.body
        const { name, username, email, image } = userSchema.parse(body)

        const user = await db.user.findUnique({
            where: {
                id: userId,
            },
        })

        if (!user) {
            return NextResponse.json({ message: "Missing user" }, { status: 400 })
        }

        // if (session?.user?.email !== user.email) {
        //   return NextResponse.json(
        //     { message: "You are not authorized" },
        //     { status: 401 }
        //   )
        // }

        const updateUser = await db.user.update({
            where: {
                id: userId,
            },
            data: {
                name,
                username,
                email,
                image,
            },
        })

        return NextResponse.json({ team: updateUser, message: "user updated" }, { status: 201 })
    } catch (error) {
        console.log("🚀 ~ file: userid route.ts:45 ~ POST ~ error:", error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
