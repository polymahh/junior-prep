import * as z from "zod"

const RoleName = z.enum(["FRONTEND", "BACKEND", "DESIGN", "SENIOR"])

export const teamSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(50, { message: "Username must be less than 50 characters" }),
    description: z.string(),
    repo: z.string().url({ message: "Invalid Url" }),
    creatorRole: RoleName.optional(),
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

export type teamType = z.infer<typeof teamSchema>
