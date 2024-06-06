import { db } from "@/db"
import { updateTeam } from "@/lib/validators/teams"
import { NextResponse } from "next/server"

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
                Project: {
                    select: {
                        name: true,
                        githubRepo: true,
                        description: true,
                        isCompleted: true,
                        createdAt: true,
                    },
                },
                Role: true,
                creator: {
                    select: {
                        username: true,
                        image: true,
                    },
                },
            },
        })

        const { Project, Role: roles, ...rest } = team!

        return NextResponse.json(
            {
                team: { project: Project[0], roles, ...rest },
                message: "team with ID found",
            },
            { status: 201 },
        )
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function PUT(req: Request, { params }: { params: { teamId: string } }) {
    try {
        const body = await req.json()
        const { name, description, repo, isCompleted, roles } = updateTeam.parse(body)

        const { teamId } = params

        if (!teamId) {
            return NextResponse.json({ message: "Missing Team Id" }, { status: 400 })
        }

        const project = await db.team.update({
            where: {
                id: teamId,
            },
            data: {
                Project: {
                    update: {
                        where: { teamId },
                        data: { name, description, githubRepo: repo, isCompleted },
                    },
                },
                Role: {
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
        console.log("🚀 ~ project test with upset and delete many:", project)

        if (!project) {
            return NextResponse.json({ message: "Team not found" }, { status: 400 })
        }

        //TODO: get the user from token

        // if(project?.team.creatorId !== session?.user?.email){
        //     return NextResponse.json({message:"You are not authorized"},{status:401})
        // }

        return NextResponse.json({ team: project, message: "Team found" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function DELETE(req: Request, { params }: { params: { teamId: string } }) {
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
        })

        await db.team.delete({
            where: {
                id: teamId,
            },
        })

        return NextResponse.json({ team: team, message: "team with ID found" }, { status: 201 })
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
