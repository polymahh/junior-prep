import { NextResponse } from "next/server"
import { db } from "@/db"

import { commentSchema } from "@/lib/validators/comment"

export async function PUT(
  req: Request,
  { params }: { params: { teamId: string; commentId: string } }
) {
  try {
    const { teamId, commentId } = params
    if (!commentId || !teamId) {
      return NextResponse.json({ message: "Missing param" }, { status: 400 })
    }

    const body = req.body

    const { comment, email } = commentSchema.parse(body)

    const oldComment = await db.comment.findUnique({
      where: {
        id: commentId,
      },
    })

    // if (session?.user?.email !== oldComment?.userEmail) {
    //   return NextResponse.json(
    //     { message: "You are not authorized" },
    //     { status: 401 }
    //   )
    // }

    const newComment = await db.comment.update({
      where: {
        id: commentId,
      },

      data: {
        content: comment,
      },
    })

    return NextResponse.json(
      { role: newComment, message: "comment updated successfully" },
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

export async function DELETE(
  req: Request,
  { params }: { params: { teamId: string; commentId: string } }
) {
  try {
    const { teamId, commentId } = params
    if (!commentId || !teamId) {
      return NextResponse.json({ message: "Missing param" }, { status: 400 })
    }

    //  if(!session){
    //     return {messge:"not authenticated"}
    //  }

    const oldComment = await db.comment.findUnique({
      where: {
        id: commentId,
      },
    })

    // if (session?.user?.email !== oldComment?.userEmail) {
    //   return NextResponse.json(
    //     { message: "You are not authorized" },
    //     { status: 401 }
    //   )
    // }

    await db.comment.delete({
      where: {
        id: commentId,
      },
    })

    return NextResponse.json(
      { message: "comment deleted successfully" },
      { status: 201 }
    )
  } catch (error) {
    console.log("🚀 ~ file: team id route.ts:45 ~ POST ~ error:", error)
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    )
  }
}
