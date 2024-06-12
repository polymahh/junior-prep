import { db } from "@/db"
import { updateTeam } from "@/lib/validators/teams"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { teamId: string } }) {
    try {
        const { teamId } = params

        if (!teamId) {
            return NextResponse.json(
                {
                    message: "Missing Team Id",
                },
                {
                    status: 400,
                },
            )
        }

        const team = await db.team.findUnique({
            where: {
                id: teamId,
            },
            include: {
                roles: true,
                creator: {
                    select: {
                        username: true,
                        image: true,
                    },
                },
            },
        })

        return NextResponse.json(
            {
                team,
                message: "team with ID found",
            },
            { status: 201 },
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function PUT(req: NextRequest, { params }: { params: { teamId: string } }) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    try {
        const body = await req.json()
        const { name, description, repo, isCompleted, roles } = updateTeam.parse(body)

        const { teamId } = params

        if (!teamId) {
            return NextResponse.json({ message: "Missing Team Id" }, { status: 400 })
        }

        const search_terms = `${name}|${roles.map(role => `${role.roleName}|${role.stack}`).join("|")}|${
            token.username
        }`.toLowerCase()

        const project = await db.team.update({
            where: {
                id: teamId,
                creatorId: token.id,
            },
            data: {
                name,
                description,
                githubRepo: repo,
                isCompleted,
                searchTerms: search_terms,
                roles: {
                    upsert: roles.map((role: any) => ({
                        where: { roleName_teamId: { teamId, roleName: role.roleName } },
                        update: {
                            stack: role.stack,
                        },
                        create: {
                            stack: role.stack,
                            roleName: role.roleName,
                        },
                    })),
                    deleteMany: {
                        NOT: {
                            roleName: {
                                in: roles.map(role => role.roleName),
                            },
                        },
                    },
                },
            },
        })

        return NextResponse.json({ team: project, message: "Team found" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { teamId: string } }) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    try {
        const { teamId } = params
        //TODO: check if user is restricted or banned

        if (!teamId) {
            return NextResponse.json(
                {
                    message: "Missing Team Id",
                },
                {
                    status: 400,
                },
            )
        }

        await db.team.delete({
            where: {
                id: teamId,
                creatorId: token.id,
            },
        })

        return NextResponse.json({ message: "team deleted" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
