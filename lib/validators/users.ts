import * as z from "zod"

export const userSchema = z.object({
    name: z
        .string()
        .min(3, { message: "name must be at least 3 characters" })
        .max(50, { message: "name must be less than 50 characters" }),
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(50, { message: "Username must be less than 50 characters" }),
    email: z.string().email("Invalid email address"),
    image: z.string().url({ message: "Invalid Url" }).optional(),
})
