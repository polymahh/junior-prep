import { db } from "@/db"
import { commentSchema } from "@/lib/validators/comment"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest, { params }: { params: { teamId: string } }) {
    try {
        const { teamId } = params

        if (!teamId) return NextResponse.json({ message: "Team identifier is missing!" }, { status: 400 })

        const comments = await db.comment.findMany({
            where: { project: { teamId } },
            include: {
                user: { select: { image: true, name: true, username: true } },
                _count: { select: { children: true } },
            },
            orderBy: [{ updateAt: "desc" }, { parentId: "desc" }],
        })

        // if (!project) return NextResponse.json({ message: `There is no team with the id: ${teamId}` }, { status: 404 })

        return NextResponse.json(comments, { status: 200 })
    } catch (error) {
        console.log("GET: teams/[teamId]/comment", error)
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}

export async function POST(req: Request, { params }: { params: { teamId: string } }) {
    const { teamId } = params
    const user = req.headers.get("x-user-data")

    if (!teamId) return NextResponse.json({ message: "missing team Id" }, { status: 400 })
    if (!user) return NextResponse.json({ message: "missing user" }, { status: 400 })

    const { id } = JSON.parse(user)

    try {
        const body = await req.json()

        const { comment, parent } = commentSchema.parse(body)

        const project = await db.project.findFirst({
            where: { teamId },
            select: { id: true },
        })

        if (!project) return NextResponse.json({ message: `There is no team with the id: ${teamId}` }, { status: 404 })

        const newComment = await db.comment.create({
            data: {
                content: comment,
                parentId: parent,
                userId: id,
                ProjectId: project.id,
            },
            include: {
                user: { select: { image: true, name: true, username: true } },
                _count: { select: { children: true } },
            },
        })

        return NextResponse.json(newComment, { status: 201 })
    } catch (error) {
        console.log("POST: teams/[teamId]/comment", error)
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
