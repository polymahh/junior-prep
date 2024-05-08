import * as z from "zod"

export const registerSchema = z
    .object({
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, { message: "Password must be at least 6 characters" }),
        confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    })

export type RegiterType = z.infer<typeof registerSchema>

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})

export type LoginType = z.infer<typeof loginSchema>

export const emailSchema = z.object({
    email: z.string().email("Invalid email address"),
})

export const verifyRequestSchema = z.object({
    email: z.string().email("Invalid email address"),
    token: z.string(),
})

export type verifyRequestType = z.infer<typeof verifyRequestSchema>

export const newPasswordSchema = z
    .object({
        newPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
        confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
    })
    .refine(data => data.newPassword === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"], // path of error
    })

export type newPasswordType = z.infer<typeof newPasswordSchema>

export const changePasswordSchema = z.object({
    email: z.string().email("Invalid email address"),
    token: z.string(),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
})
