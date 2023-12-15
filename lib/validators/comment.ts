import * as z from "zod"


export const commentSchema = z.object({
    comment: z.string().min(1),
    email: z.string().email("Invalid email address"),
  })

export type commentType = z.infer<typeof commentSchema> 