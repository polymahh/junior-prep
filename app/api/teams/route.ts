import { db } from "@/db"
import { roleName } from "@prisma/client"

import { teamSchema } from "@/lib/validators/teams"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log("🚀 ~ file: route.ts:13 ~ POST ~ body:", body)

    const { name, description, repo, roles, creatorRole } =
      teamSchema.parse(body)

    const user = await db.user.findUnique({
      // TODO: take email from jwt token
      where: {
        email: "admin@admin.com",
        // email: session.user?.email as string
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
            data: roles,
          },
        },
      },
    })
    return Response.json(
      { team: team, message: "team created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.log("🚀 ~ file: teams route.ts:45 ~ POST ~ error:", error)
    return Response.json({ message: "Something went wrong!" }, { status: 500 })
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

    return Response.json(
      { teams, message: "teams list success" },
      { status: 201 }
    )
  } catch (error) {
    console.log("🚀 ~ file: route.ts:90 ~ GET ~ error:", error)
    return Response.json({ message: "Something went wrong!" }, { status: 500 })
  }
}
