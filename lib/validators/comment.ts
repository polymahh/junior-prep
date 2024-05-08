import * as z from "zod"

export const commentSchema = z.object({
    comment: z.string().min(1).max(500).trim(),
    parent: z.string().cuid().trim().optional(),
})

export type newCommentType = z.infer<typeof commentSchema>
