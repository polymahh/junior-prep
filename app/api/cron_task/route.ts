import { db } from "@/db"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    try {
        const flashcards = await db.language.findUnique({
            where: {
                languageName: "javascript",
            },
        })

        return NextResponse.json({ flashcards, message: "flashcards found" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "something went wrong" }, { status: 500 })
    }
}
