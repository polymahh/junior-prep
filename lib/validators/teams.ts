import * as z from "zod"

const alphanumericRegex = new RegExp(/^[A-z0-9\s]+$/i)
const numberRegex = new RegExp(/^\d+$/)
const RoleName = z.enum(["FRONTEND", "BACKEND", "DESIGN", "FULLSTACK"])

export const teamSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(50, { message: "Username must be less than 50 characters" }),
    description: z.string(),
    repo: z.string().url({ message: "Invalid Url" }),
    roles: z
        .array(
            z
                .object({
                    active: z.boolean().optional(),
                    roleName: RoleName,
                    stack: z.string().optional(),
                })
                .refine(
                    role => {
                        if (role.active) {
                            if (role.stack) {
                                return true
                            } else return false
                        }
                        return true
                    },
                    {
                        message: "stack can't be empty ",
                        path: ["stack"],
                    },
                ),
        )
        .nonempty({
            message: "You have to select at least one role.",
        }),
    isCompleted: z.boolean().optional(),
})

export const updateTeam = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(50, { message: "Username must be less than 50 characters" }),
    description: z.string(),
    repo: z.string().url({ message: "Invalid Url" }),
    isCompleted: z.boolean().optional(),
    roles: z
        .array(
            z
                .object({
                    active: z.boolean().optional(),
                    roleName: RoleName,
                    stack: z.string().optional(),
                })
                .refine(
                    role => {
                        if (role.active) {
                            if (role.stack) {
                                return true
                            } else return false
                        }
                        return true
                    },
                    {
                        message: "stack can't be empty",
                        path: ["stack"],
                    },
                ),
        )
        .nonempty({
            message: "You have to select at least one role.",
        }),
})

export const teamFilters = z.object({
    search: z.string().regex(alphanumericRegex).max(255).optional(),
    statusSort: z.enum(["completed", "inprogress"]).optional(),
    dateSort: z.enum(["asc", "desc"]).optional(),
    length: z.string().regex(numberRegex).max(3).optional(),
    limit: z.string().regex(numberRegex).max(3).optional(),
})

export type teamType = z.infer<typeof teamSchema>
export type filterType = z.infer<typeof teamFilters>
