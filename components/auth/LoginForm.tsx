"use client"

import React, { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { LoginType, loginSchema } from "@/lib/validators/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import OAuthButtons from "./OAuthButton"
import ResetPassword from "./ResetPassword"

function LoginForm() {
  const [showErr, setShowErr] = useState(false)
  const [loading, setLoading] = useState(false)

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const router = useRouter()
  const searchParams = useSearchParams()
  const origin = searchParams.get("origin")
  console.log(origin ?? "dashboard")

  async function onSubmit(values: LoginType) {
    // setLoading(true)
    // const loginData = await signIn("credentials", {
    //   email: values.email,
    //   password: values.password,
    //   redirect: false,
    // })
    // if (loginData?.error) {
    //   setShowErr(true)
    //   setLoading(false)
    // } else {
    //   setLoading(false)
    //   console.log(loginData)
    //   router.push(origin ? `/${origin}` : "/dashboard")
    // }
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
                <Input
                  type="email"
                  placeholder="email@company.com"
                  {...field}
                />
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

          <ResetPassword />
        </div>
        <Button
          type="submit"
          className="py-4 text-lg w-full"
          isLoading={loading}
        >
          Login
        </Button>
      </form>
      <div className="flex gap-2">
        <p className="text-muted-foreground text-sm">
          Don&apos;t have an account?
        </p>
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
