import { db } from "@/db"
import { teamSchema } from "@/lib/validators/teams"
import { roleName } from "@prisma/client"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    try {
        const body = await req.json()
        const { name, description, repo, roles, creatorRole } = teamSchema.parse(body)

        const search_terms = `${name}|${roles.map(role => `${role.roleName}|${role.stack}`).join("|")}|${
            token.username
        }`.toLowerCase()
        //TODO: add a check for banned/restricted users
        const team = await db.team.create({
            data: {
                creatorId: token?.id!,
                creatorRole: creatorRole,
                searchTerms: search_terms,
                name,
                description,
                githubRepo: repo,
                roles: {
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
        const order = req.nextUrl.searchParams.get("dateSort") || "desc"
        const status = req.nextUrl.searchParams.get("statusSort")
        const search = req.nextUrl.searchParams.get("search")?.toLowerCase()
        const offset = +(req.nextUrl.searchParams.get("length") ?? 0)
        const limit = +(req.nextUrl.searchParams.get("limit") ?? 10)

        const teams = await db.team.findMany({
            skip: offset,
            take: limit,
            where: {
                AND: [
                    {
                        searchTerms: {
                            contains: search || "",
                        },
                    },
                    status && (status === "completed" || status === "inprogress")
                        ? { isCompleted: status === "completed" }
                        : {
                              OR: [{ isCompleted: true }, { isCompleted: false }],
                          },
                ],
            },
            orderBy: {
                createdAt: order === "asc" ? "asc" : "desc",
            },

            include: {
                roles: true,
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
