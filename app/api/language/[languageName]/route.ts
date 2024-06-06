import { db } from "@/db"
import { authOptions } from "@/lib/authOptions"
import { userAnswerSchema } from "@/lib/validators/user_answer"
import { userResponse } from "@prisma/client"
import { jwtVerify } from "jose"
import { getServerSession } from "next-auth/next"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { languageName: string } }) {
    const session = await getServerSession(authOptions)
    console.log("🚀 ~ GET ~ session:", session)

    if (!session) return NextResponse.json({ message: "Unauthorised" }, { status: 401 })
    try {
        const { languageName } = params
        console.log("🚀 ~ languageName:", languageName)

        const formattedDate = new Date().toISOString().split("T")[0]
        const timeSpent = await db.timeSpent.findUnique({
            where: {
                createdAt_userId: {
                    createdAt: new Date(formattedDate),
                    userId: payload.id as string,
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
                                userId: payload.id as string, //TODO: user id will come from cookie
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
        console.log("🚀 ~ GET ~ error:", error)
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const data = userAnswerSchema.parse(body)

        const cookieStore = cookies()
        const _acc__token = cookieStore.get("_acc__token")

        if (!_acc__token) {
            return NextResponse.json({ message: "no access" }, { status: 401 })
        }

        const { payload } = await jwtVerify(_acc__token.value, new TextEncoder().encode(process.env.JWT_REFRESH_SECRET))

        if (!payload) {
            return NextResponse.json({ message: "no access" }, { status: 401 })
        }
        const answers = await db.userAnswer.upsert({
            where: {
                flashcardId_userId: {
                    flashcardId: data.answer.flashcardId as number,
                    userId: payload.id as string,
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
                userId: payload.id as string,
            },
        })

        const formattedDate = new Date().toISOString().split("T")[0]

        const timespent = await db.timeSpent.upsert({
            where: {
                createdAt_userId: {
                    createdAt: new Date(formattedDate),
                    userId: payload.id as string,
                },
            },
            update: {
                time: data?.time,
                totalCards: { increment: 1 },
            },
            create: {
                time: data?.time,
                userId: payload.id as string,
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
