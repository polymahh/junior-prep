import { db } from "@/db"
import { late } from "zod"

import { data as javascriptData } from "./data/javascript"

interface Data {
  language: string
  questions: { question: string; answer: string }[]
}
const seedData = async (data: Data) => {
  const result = data.questions.map((question) => {
    return {
      languageName: data.language,
      question: question.question,
      answer: question.answer,
    }
  })

  await db.language.delete({
    where: {
      languageName: data.language,
    },
  })

  await db.flashcard.deleteMany({
    where: {
      languageName: data.language,
    },
  })

  await db.language.create({
    data: {
      languageName: data.language,
    },
  })

  await db.flashcard.createMany({
    data: result,
  })
}

seedData(javascriptData)
