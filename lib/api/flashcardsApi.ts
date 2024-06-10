import { axios } from "../axios"
import { userAnswerType } from "../validators/user_answer"

export const flashcardsApi = {
    getSevenDaysActivity: async () => {
        const result = await axios.get("api/language")
        return result.data?.sevenDaysActivity?.timeSpent
    },

    getFlashcards: async (language: string) => {
        const result = await axios.get(`api/language/${language}`)
        return result.data
    },
    sendAnswer: async (answer: userAnswerType) => {
        const result = await axios.post(`api/language/${answer.answer.languageName}`, answer)
        return result.data
    },
}
