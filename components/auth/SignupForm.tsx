"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { auth, fireStore } from "@/firebase/clientApp"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

import Loader from "../Loader"
import EmailVerification from "./EmailVerification"
import OAuthButtons from "./OAuthButton"

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

const SignupForm = () => {
  const form = useForm<RegiterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const [createUserWithEmailAndPassword, userCred, loading, userErr] =
    useCreateUserWithEmailAndPassword(auth)

  function onSubmit(values: RegiterType) {
    createUserWithEmailAndPassword(values.email, values.password)
  }

  return userCred ? (
    <EmailVerification email={userCred?.user.email} />
  ) : (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center space-y-6 px-8 sm:w-[600px] "
      >
        <div>
          <OAuthButtons />
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
          type="submit"
          className="py-4 text-lg w-full"
          isLoading={loading}
        >
          Sign up
        </Button>
      </form>
      <div className="flex gap-2">
        <p className="text-muted-foreground text-sm">
          Already have an account?
        </p>
        <Link className="text-highlight text-sm" href={"/login"}>
          Login here.
        </Link>
      </div>
    </Form>
  )
}
export default SignupForm
