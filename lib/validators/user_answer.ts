import * as z from "zod"

export const userAnswerSchema = z.object({
  response: z.string(),
  easeFactor: z.number(),
  interval: z.number(),
  languageName: z.string(),
  flashcardId: z.number(),
})
