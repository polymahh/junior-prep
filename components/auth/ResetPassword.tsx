"use client"

import { useToast } from "../ui/use-toast"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authApi } from "@/lib/api/authApi"
import { emailSchema } from "@/lib/validators/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { LockOpen } from "lucide-react"
import React from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

const resetSchema = z.object({
    email: z.string().email("Invalid email address"),
})

type resetType = z.infer<typeof resetSchema>

function ResetPassword() {
    const { toast } = useToast()
    const form = useForm<resetType>({
        resolver: zodResolver(emailSchema),
        defaultValues: {
            email: "",
        },
    })

    const { mutate, isPending } = useMutation({
        mutationFn: async (email: string) => {
            console.log("this mutation is running")
            await authApi.password_token(email)
        },
        onSuccess: () => {
            toast({
                title: "Email sent successfully",
                description: "change password with the link sent to your email",
            })
        },
    })

    const onSubmit = (values: { email: string }) => {
        mutate(values.email)
    }

    return (
        <div className="flex flex-col gap-4 pt-12 items-center text-center">
            <h2 className="text-3xl pt-4">Reset Your Password!</h2>
            <div className="rounded-full bg-highlight text-slate-50 p-4">
                <LockOpen className="h-8 w-8" />
            </div>
            <div>
                <span className="text-muted-foreground">Enter the email adress associated with your account. </span>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 px-8  ">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormControl>
                                    <Input type="email" placeholder="email@company.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        className={buttonVariants({
                            variant: "outline",
                        })}
                        isLoading={isPending}
                    >
                        Reset Password
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ResetPassword
