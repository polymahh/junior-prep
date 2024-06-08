"use client"

import { toast } from "../ui/use-toast"
import OAuthButtons from "./OAuthButton"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { LoginType, loginSchema } from "@/lib/validators/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import React from "react"
import { useForm } from "react-hook-form"

function LoginForm() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const callback = searchParams.get("callbackUrl")
    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const {
        formState: { isSubmitting, errors, isSubmitSuccessful },
    } = form

    async function onSubmit(values: LoginType) {
        const loginData = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
        })

        if (loginData?.error) {
            toast({
                title: "Something went Wrong!",
                description: loginData.error,
                variant: "destructive",
            })
        } else {
            router.push(callback ? callback : "/dashboard")
        }
    }
    return (
        <Form {...form}>
            <div className="mt-2 flex w-full items-center before:flex-1 before:border-t before:border-border after:flex-1  after:border-t after:border-border max-w-xl">
                <p className="mx-4 mb-0 text-center font-semibold ">OR</p>
            </div>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-full flex-col items-center space-y-6 px-8 sm:w-[600px] "
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-lg">Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="email@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel className="text-lg">Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="********" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="w-full text-sm flex justify-between">
                    <Link
                        className={buttonVariants({
                            variant: "link",
                            size: "link",
                        })}
                        href="/reset_password"
                    >
                        Forgot Password?
                    </Link>
                </div>
                <Button
                    type="submit"
                    className="py-4 text-lg w-full"
                    isLoading={isSubmitting || (isSubmitSuccessful && !errors)}
                >
                    Login
                </Button>
            </form>
            <div className="flex gap-2">
                <p className="text-muted-foreground text-sm">Don&apos;t have an account?</p>
                <Link
                    className={buttonVariants({
                        variant: "link",
                        size: "link",
                    })}
                    href={"/register"}
                >
                    Sign up.
                </Link>
            </div>
        </Form>
    )
}

export default LoginForm
