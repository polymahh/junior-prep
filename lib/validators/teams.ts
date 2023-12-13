import * as z from "zod"


export const teamSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(50, { message: "Username must be less than 50 characters" }),
    description: z.string(),
    repo: z.string().url({ message: "Invalid Url" }),
    creatorRole: z.string({ required_error: "choose at least one role" }),
    roles: z
      .object({
        active: z.boolean(),
        name: z.string(),
        stack: z.string(),
      })
      .array()
      .nonempty({
        message: "You have to select at least one role.",
      }),
  })
export const updateTeam = z.object({
    name: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(50, { message: "Username must be less than 50 characters" }),
    description: z.string(),
    repo: z.string().url({ message: "Invalid Url" }),
    isCompleted: z.boolean().optional(),
    
  })


  export type teamType = z.infer<typeof teamSchema>