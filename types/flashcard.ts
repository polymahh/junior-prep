export type FlashcardResponse = "again" | "hard" | "good" | "easy"

export interface Flashcard {
  id: number
  question: string
  answer: string
  UserAnswer: {
    easeFactor: number
    interval: number
    lastReviewed: Date
    response?: FlashcardResponse // Optional property for user's response
  }[]
}
