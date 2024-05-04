import { NextResponse } from "next/server"
import { db } from "@/db"
import { roleName } from "@prisma/client"

import { roleSchema } from "@/lib/validators/roles"

export async function POST(
  req: Request,
  { params }: { params: { teamId: string } }
) {
  try {
    const { teamId } = params
    if (!teamId) {
      return NextResponse.json({ message: "Missing Team Id" }, { status: 400 })
    }

    const body = await req.json()
    const { name, stack } = roleSchema.parse(body)

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

    const team = await db.team.findUnique({
      where: {
        id: teamId,
      },
    })

    const user = await db.user.findUnique({
      where: {
        id: team?.creatorId as string,
      },
    })

    // if (session?.user?.email !== user?.email) {
    //   return NextResponse.json(
    //     { message: "You are not authorized" },
    //     { status: 401 }
    //   )
    // }

    const role = await db.role.create({
      data: {
        roleName: name as roleName,
        stack,
        team: {
          connect: {
            id: teamId,
          },
        },
      },
    })
    return NextResponse.json(
      { role: role, message: "role created successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.log("🚀 ~ file: roles route.ts:45 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
