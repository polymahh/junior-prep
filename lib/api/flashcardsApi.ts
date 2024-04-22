import { UserAnswer } from "@prisma/client"

import { axios } from "../axios"

export const flashcardsApi = {
  getFlashcards: async (language: string) => {
    const response = await axios.get(`api/language/${language}`)
    return response.data.flashcards
  },
  sendAnswer: async (
    answer: Omit<UserAnswer, "userId" | "createdAt" | "lastReviewed">
  ) => {
    const response = await axios.post(
      `api/language/${answer.languageName}`,
      answer
    )
    return response.data
  },
}
