import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"

export async function GET(
  req: Request,
  { params }: { params: { languageName: string } }
) {
  try {
    const { languageName } = params

    const questions = await db.language.findUnique({
      where: {
        languageName: languageName,
      },
      include: {
        Flashcard: {
          select: {
            answer: true,
            question: true,
          },
        },
      },
    })
    console.log("🚀 ~ questions:", questions)

    return NextResponse.json(
      { questions: questions, message: "questions found" },
      { status: 200 }
    )
  } catch (error) {
    console.log("🚀 ~ GET ~ error:", error)
    return Response.json({ message: "something went wrong" }, { status: 500 })
  }
}
