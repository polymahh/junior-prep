import { db } from "@/db"
import { commentSchema } from "@/lib/validators/comment"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { teamId: string } }) {
    try {
        const { teamId } = params

        if (!teamId) return NextResponse.json({ message: "Team identifier is missing!" }, { status: 400 })

        const comments = await db.comment.findMany({
            where: { TeamId: teamId },
            include: {
                user: { select: { image: true, name: true, username: true } },
                _count: { select: { children: true } },
            },
            orderBy: [{ updateAt: "desc" }, { parentId: "desc" }],
        })

        return NextResponse.json(comments, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}

export async function POST(req: NextRequest, { params }: { params: { teamId: string } }) {
    // const user = req.headers.get("x-user-data") //TODO: ask pipas about this
    //TODO: add a check for banned/restricted users
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    const { teamId } = params

    if (!teamId) return NextResponse.json({ message: "missing team Id" }, { status: 400 })

    try {
        const body = await req.json()

        const { comment, parent } = commentSchema.parse(body)

        const project = await db.team.findFirst({
            where: { id: teamId },
            select: { id: true },
        })

        if (!project) return NextResponse.json({ message: `There is no team with the id: ${teamId}` }, { status: 404 })

        const newComment = await db.comment.create({
            data: {
                content: comment,
                parentId: parent,
                userId: token.id,
                TeamId: project.id,
            },
            include: {
                user: { select: { image: true, name: true, username: true } },
                _count: { select: { children: true } },
            },
        })

        return NextResponse.json(newComment, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
