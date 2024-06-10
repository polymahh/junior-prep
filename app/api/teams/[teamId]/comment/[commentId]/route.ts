import { db } from "@/db"
import { commentSchema } from "@/lib/validators/comment"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function PUT(req: NextRequest, { params }: { params: { teamId: string; commentId: string } }) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    const { teamId, commentId } = params

    if (!commentId || !teamId) return NextResponse.json({ message: "Missing params" }, { status: 400 })

    try {
        const body = await req.json()

        const { comment } = commentSchema.parse(body)
        //TODO: ask pipas about this
        const oldComment = await db.comment.findUnique({
            where: { id: commentId, TeamId: teamId, userId: token.id },
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
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    const { teamId, commentId } = params

    if (!commentId || !teamId) return NextResponse.json({ message: "Missing params" }, { status: 400 })

    try {
        const oldComment = await db.comment.findFirst({
            where: { id: commentId, TeamId: teamId, userId: token.id },
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
