import * as z from "zod"

export const commentSchema = z.object({
    comment: z.string().min(1).max(500).trim(),
})

export type commentType = z.infer<typeof commentSchema>
