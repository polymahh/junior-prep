import * as z from "zod"


export const requestSchema = z.object({
    email: z.string().email("Invalid email address"),
    isAccepted: z.boolean().optional()
  })

export type requestType = z.infer<typeof requestSchema> 