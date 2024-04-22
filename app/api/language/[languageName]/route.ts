import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { jwtVerify } from "jose"

import { userAnswerSchema } from "@/lib/validators/user_answer"

export async function GET(
  req: Request,
  { params }: { params: { languageName: string } }
) {
  try {
    // const cookieStore = cookies()
    // const accessToken = cookieStore.get("_acc__token")?.value
    // console.log("🚀 ~ accessToken:", accessToken)
    // if (!accessToken) {
    //   return NextResponse.json({ message: "no access" }, { status: 401 })
    // }
    // const { payload } = await jwtVerify(
    //   accessToken,
    //   new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
    // )

    const { languageName } = params

    // console.log("🚀 ~ payload:", payload)
    const flashcards = await db.language.findUnique({
      where: {
        languageName: languageName,
      },
      include: {
        Flashcard: {
          select: {
            id: true,
            answer: true,
            question: true,
            UserAnswer: {
              where: {
                userId: "clv7yesdu0000ujrwnfgcr1n9", //TODO: user id will come from cookie
              },
              select: {
                response: true,
                easeFactor: true,
                interval: true,
                lastReviewed: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json(
      { flashcards: flashcards, message: "flashcards found" },
      { status: 200 }
    )
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error)
    return Response.json({ message: "something went wrong" }, { status: 500 })
  }
}

export async function POST(
  req: Request,
  { params }: { params: { languageName: string } }
) {
  const { languageName } = params
  const body = await req.json()
  console.log("🚀 ~ POST ~ body:", body)
  const data = userAnswerSchema.parse(body)

  const cookieStore = cookies()
  const _acc__token = cookieStore.get("_acc__token")

  if (!_acc__token) {
    return NextResponse.json({ message: "no access" }, { status: 401 })
  }

  try {
    const { payload } = await jwtVerify(
      _acc__token.value,
      new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
    )

    if (!payload) {
      return NextResponse.json({ message: "no access" }, { status: 401 })
    }

    console.log("🚀 ~ POST ~ payload:", payload.id)
    const answers = await db.userAnswer.upsert({
      where: {
        flashcardId_userId: {
          flashcardId: data.flashcardId as number,
          userId: payload.id as string,
        },
      },
      update: {
        response: data?.response as string,
        easeFactor: data?.easeFactor as number,
        interval: data?.interval as number,
      },
      create: {
        ...data,
        userId: payload.id as string,
      },
    })

    return NextResponse.json({ message: "answer created" }, { status: 201 })
  } catch (error) {
    console.log("🚀 ~ POST ~ error:", error)
    return Response.json({ message: "something went wrong" }, { status: 500 })
  }
}
