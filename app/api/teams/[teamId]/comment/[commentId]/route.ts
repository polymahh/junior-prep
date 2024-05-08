import { db } from "@/db"
import { commentSchema } from "@/lib/validators/comment"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, { params }: { params: { teamId: string; commentId: string } }) {
    const { teamId, commentId } = params
    const user = req.headers.get("x-user-data")

    if (!commentId || !teamId) return NextResponse.json({ message: "Missing params" }, { status: 400 })
    if (!user) return NextResponse.json({ message: "Missing user" }, { status: 400 })

    const { id } = JSON.parse(user)

    try {
        const body = await req.json()

        const { comment } = commentSchema.parse(body)

        const oldComment = await db.comment.findUnique({
            where: { id: commentId, project: { teamId }, userId: id },
        })

        if (!oldComment)
            return NextResponse.json(
                {
                    message: `Can't edit the comment with the id ${commentId}!`,
                },
                { status: 400 },
            )

        const newComment = await db.comment.update({
            where: { id: commentId },
            data: { content: comment },
            include: {
                user: { select: { username: true, image: true, name: true } },
                _count: { select: { children: true } },
            },
        })

        return NextResponse.json(newComment, { status: 201 })
    } catch (error) {
        console.log("PUT: teams/[teamId]/comment/[commentId]", error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { teamId: string; commentId: string } }) {
    const { teamId, commentId } = params
    const user = req.headers.get("x-user-data")

    if (!commentId || !teamId) return NextResponse.json({ message: "Missing param" }, { status: 400 })
    if (!user) return NextResponse.json({ message: "Missing user" }, { status: 400 })

    const { id } = JSON.parse(user)

    try {
        const oldComment = await db.comment.findFirst({
            where: { id: commentId, project: { teamId }, userId: id },
        })

        if (!oldComment)
            return NextResponse.json(
                {
                    message: `Can't delete the comment with the id ${commentId}!`,
                },
                { status: 400 },
            )

        await db.comment.delete({ where: { id: commentId } })

        return NextResponse.json({ message: "comment deleted successfully" }, { status: 200 })
    } catch (error) {
        console.log("DELETE: teams/[teamId]/comment/[commentId]", error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
