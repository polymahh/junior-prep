"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button, buttonVariants } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
})

type RegiterType = z.infer<typeof loginSchema>

function Login() {
  const form = useForm<RegiterType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: RegiterType) {
    console.log(values)
  }
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
      <div className=" flex flex-col items-center">
        <Icons.logo />
        <h2 className="text-muted-foreground">Login to your account</h2>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center space-y-6 px-8 sm:w-[600px] "
        >
          <div>
            <Link
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                variant: "secondary",
                size: "lg",
                className: "py-2 gap-4 h-12",
              })}
              href={"/"}
            >
              <Image
                src={"/images/googlelogo.png"}
                height={24}
                width={24}
                alt="Log in with Google"
              />
              <span>Login with Google</span>
            </Link>
          </div>

          <div className="mt-2 flex w-full items-center before:flex-1 before:border-t before:border-border after:flex-1  after:border-t after:border-border">
            <p className="mx-4 mb-0 text-center font-semibold ">OR</p>
          </div>

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
            <div className="items-center flex space-x-2">
              <Checkbox id="terms1" />
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </label>
            </div>
            <Link className=" text-highlight" href={"/"}>
              Forgot Password?
            </Link>
          </div>
          <Button
            type="submit"
            className={buttonVariants({
              variant: "outline",
              className: "py-4 text-lg w-full",
            })}
          >
            Login
          </Button>
        </form>
        <div className="flex gap-2">
          <p className="text-muted-foreground text-sm">
            Already have an account?
          </p>
          <Link className="text-highlight text-sm" href={"/register"}>
            Sign up.
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default Login
