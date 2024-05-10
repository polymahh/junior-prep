"use client"

import { toast } from "../ui/use-toast"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authApi } from "@/lib/api/authApi"
import { newPasswordSchema, newPasswordType } from "@/lib/validators/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { LockOpen } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

function NewPassword() {
    const router = useRouter()
    const params = useSearchParams()
    const email = params.get("email") as string
    const token = params.get("token") as string
    const { mutate, isPending } = useMutation({
        mutationFn: async (password: string) => {
            await authApi.change_password(email, token, password)
        },
        onSuccess: () => {
            toast({ title: "Password changed successfully" })
            router.push(`/login`)
        },
    })

    const form = useForm<newPasswordType>({
        resolver: zodResolver(newPasswordSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    })

    const onSubmit = (values: newPasswordType) => {
        mutate(values.newPassword)
    }

    return (
        <div className="flex flex-col gap-4 pt-12 items-center text-center">
            <h2 className="text-3xl pt-4">Reset Your Password!</h2>
            <div className="rounded-full bg-highlight text-slate-50 p-4">
                <LockOpen className="h-8 w-8" />
            </div>
            <div>
                <span className="text-muted-foreground">Enter the email address associated with your account. </span>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-6 px-8  ">
                    <FormField
                        control={form.control}
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-lg">New Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem className="w-full ">
                                <FormLabel className="text-lg">Confirm Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="********" {...field} />
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

export default NewPassword
