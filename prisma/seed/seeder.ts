import { data as htmlCssData } from "./data/html_css"
import { data as javascriptData } from "./data/javascript"
import { data as nodeData } from "./data/node"
import { data as reactData } from "./data/react"
import { data as uxuiData } from "./data/ui_ux"
import { db } from "@/db"

interface Data {
    language: string
    questions: { question: string; answer: string }[]
}

const seedData = async (data: Data[]) => {
    const stringarr = data.map(item => item.language)
    const result = data.map(language => {
        return language.questions.map(question => {
            return {
                languageName: language.language,
                question: question.question,
                answer: question.answer,
            }
        })
    })

    await db.language.deleteMany({
        where: {
            languageName: {
                in: stringarr,
            },
        },
    })

    await db.language.createMany({
        data: data.map(data => ({ languageName: data.language })),
    })

    await db.flashcard.createMany({
        data: result.flat(),
    })
}
const languageArr = [javascriptData, reactData, htmlCssData, uxuiData, nodeData]
seedData(languageArr)
