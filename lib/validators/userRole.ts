import * as z from "zod"


export const userRoleSchema = z.object({
    roleId: z.string(),
    email: z.string().email("Invalid email address"),
    isAdmin: z.boolean().optional()
  })

export type userRoleType = z.infer<typeof userRoleSchema> 