import { db } from "@/db"
import { teamSchema } from "@/lib/validators/teams"
import { roleName } from "@prisma/client"
import { getToken } from "next-auth/jwt"
import router from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    try {
        const body = await req.json()
        const { name, description, repo, roles, creatorRole } = teamSchema.parse(body)

        const search_terms = `${name}|${roles.map(role => `${role.roleName}|${role.stack}|${token.username}`)}`

        const team = await db.team.create({
            data: {
                creatorId: token?.id!,
                creatorRole: creatorRole,
                searchTerms: search_terms,
                Project: {
                    create: {
                        name,
                        description,
                        githubRepo: repo,
                    },
                },
                Role: {
                    createMany: {
                        data: roles as { stack: string; roleName: roleName }[],
                    },
                },
            },
        })
        return NextResponse.json({ team: team, message: "team created successfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}

export async function GET(req: NextRequest) {
    try {
        console.log("🚀 ~ GET ~ query:", req.nextUrl)
        const teams = await db.team.findMany({
            include: {
                Project: {
                    select: {
                        name: true,
                        githubRepo: true,
                        description: true,
                        isCompleted: true,
                        createdAt: true,
                    },
                    take: 1,
                    orderBy: {
                        createdAt: "desc",
                    },
                },
                Role: true,
                creator: {
                    select: {
                        username: true,
                        image: true,
                        email: true,
                        userRoles: true,
                    },
                },
            },
        })

        return NextResponse.json({ teams, message: "teams list success" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong!" }, { status: 500 })
    }
}
