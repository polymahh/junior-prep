import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { db } from "@/db"
import { roleName } from "@prisma/client"
import { jwtVerify } from "jose"

import { teamSchema } from "@/lib/validators/teams"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, description, repo, roles, creatorRole } =
      teamSchema.parse(body)

    const cookieStore = cookies()
    const _acc__token = cookieStore.get("_acc__token")

    if (!_acc__token) {
      return NextResponse.json({ message: "no access" }, { status: 401 })
    }

    const { payload } = await jwtVerify(
      _acc__token.value,
      new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
    )

    if (!payload) {
      return NextResponse.json({ message: "no access" }, { status: 401 })
    }

    const user = await db.user.findUnique({
      where: {
        email: payload.email as string,
      },
    })

    const team = await db.team.create({
      data: {
        creatorId: user?.id!,
        creatorRole: creatorRole,
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
    return NextResponse.json(
      { team: team, message: "team created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.log("🚀 ~ file: teams route.ts:45 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
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
            githubId: true,
            email: true,
            UserRole: true,
          },
        },
      },
    })

    return NextResponse.json(
      { teams, message: "teams list success" },
      { status: 200 }
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:90 ~ GET ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
