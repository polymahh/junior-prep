"use client"

import OAuthButtons from "./OAuthButton"
import ResetPassword from "./ResetPassword"
import { Button, buttonVariants } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { authApi } from "@/lib/api/authApi"
import { axios } from "@/lib/axios"
import { LoginType, loginSchema } from "@/lib/validators/auth"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import Link from "next/link"
import { redirect, useRouter, useSearchParams } from "next/navigation"
import React, { useState } from "react"
import { useForm } from "react-hook-form"

function LoginForm() {
    const router = useRouter()
    const params = useSearchParams()
    const callback = params.get("callbackUrl")
    const { isSuccess: logedin } = useQuery({
        queryKey: ["profile"],
        queryFn: () => authApi.getProfile(),
    })

    if (logedin) {
        redirect("/dashboard")
    }

    const form = useForm<LoginType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const { mutateAsync, isPending, isSuccess, error, isError } = useMutation({
        mutationFn: async (userDetails: LoginType) => {
            const data = await authApi.signin(userDetails)
            return data
        },
        onSuccess: () => {
            router.push(callback ?? "/dashboard")
        },
    })

    async function onSubmit(values: LoginType) {
        mutateAsync(values)
    }
    return (
        <Form {...form}>
            <div>
                <OAuthButtons />
            </div>

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
                    {/* <div className="items-center flex space-x-2">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div> */}

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
                <Button type="submit" className="py-4 text-lg w-full" isLoading={isPending}>
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
