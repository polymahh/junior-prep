import { axios } from "../axios"
import { userAnswerType } from "../validators/user_answer"

export const flashcardsApi = {
    getSevenDaysActivity: async () => {
        const result = await axios.get("api/language")
        return result.data?.sevenDaysActivity?.TimeSpent
    },

    getFlashcards: async (language: string) => {
        const response = await axios.get(`api/language/${language}`)
        return response.data
    },
    sendAnswer: async (answer: userAnswerType) => {
        console.log("🚀 ~ sendAnswer: ~ answer:", answer)
        const response = await axios.post(`api/language/${answer.answer.languageName}`, answer)
        return response.data
    },
}
