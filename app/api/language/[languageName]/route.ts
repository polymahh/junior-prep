import { db } from "@/db"
import { userAnswerSchema } from "@/lib/validators/user_answer"
import { userResponse } from "@prisma/client"
import { getToken } from "next-auth/jwt"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, { params }: { params: { languageName: string } }) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })

    try {
        const { languageName } = params

        const formattedDate = new Date().toISOString().split("T")[0]
        const timeSpent = await db.timeSpent.findUnique({
            where: {
                createdAt_userId: {
                    createdAt: new Date(formattedDate),
                    userId: token?.id as string,
                },
            },
        })

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
                                userId: token.id as string,
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

        return NextResponse.json({ flashcards, timeSpent, message: "flashcards found" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}

export async function POST(req: NextRequest) {
    const token = await getToken({ req })
    if (!token) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    try {
        const body = await req.json()
        const data = userAnswerSchema.parse(body)

        const answers = await db.userAnswer.upsert({
            where: {
                flashcardId_userId: {
                    flashcardId: data.answer.flashcardId,
                    userId: token.id,
                },
            },
            update: {
                response: data?.answer.response as userResponse,
                easeFactor: data?.answer.easeFactor as number,
                interval: data?.answer.interval as number,
            },
            create: {
                ...data.answer,
                response: data?.answer.response as userResponse,
                userId: token.id,
            },
        })

        const formattedDate = new Date().toISOString().split("T")[0]

        const timespent = await db.timeSpent.upsert({
            where: {
                createdAt_userId: {
                    createdAt: new Date(formattedDate),
                    userId: token.id as string,
                },
            },
            update: {
                time: data?.time,
                totalCards: { increment: 1 },
            },
            create: {
                time: data?.time,
                userId: token.id as string,
                createdAt: new Date(formattedDate),
                totalCards: 1,
            },
        })

        return NextResponse.json({ timespent, answers, message: "answer created" }, { status: 201 })
    } catch (error) {
        console.log("🚀 ~ POST ~ error:", error)
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
