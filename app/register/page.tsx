"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { PublicLayout } from "@/components/templates/public-layout"

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(50, { message: "Username must be less than 50 characters" }),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"], // path of error
  })

type RegiterType = z.infer<typeof registerSchema>

function Register() {
  const form = useForm<RegiterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(values: RegiterType) {
    console.log(values)
  }
  return (
    <PublicLayout>
      <div className="flex h-full flex-col items-center justify-center gap-10 pt-20">
        <div className=" flex flex-col items-center">
          <Icons.logo />
          <h2 className="text-muted-foreground">Create Your Account</h2>
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
                  className: "py-2 gap-6 h-12 text-xl",
                })}
                href={"/"}
              >
                <Image
                  src={"/images/googlelogo.png"}
                  height={32}
                  width={32}
                  alt="Log in with Google"
                />
                <span>Sign up with Google</span>
              </Link>
            </div>

            <div className="mt-2 flex w-full items-center before:flex-1 before:border-t before:border-border after:flex-1  after:border-t after:border-border">
              <p className="mx-4 mb-0 text-center font-semibold ">OR</p>
            </div>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg">Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Username" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="text-lg">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@company.com" {...field} />
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
                    <Input placeholder="********" {...field} />
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
                    <Input placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className={buttonVariants({
                variant: "outline",
                className: "py-2  text-xl w-full",
              })}
            >
              Sign up
            </Button>
          </form>
        </Form>
      </div>
    </PublicLayout>
  )
}

export default Register
