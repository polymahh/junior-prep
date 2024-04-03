"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { authApi } from "@/lib/api/authApi"
import { postItems } from "@/lib/resquest"
import { RegiterType, registerSchema } from "@/lib/validators/auth"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import EmailVerification from "./EmailVerification"
import OAuthButtons from "./OAuthButton"

const initalValues = {
  email: "",
  password: "",
  confirmPassword: "",
}

const queryClient = new QueryClient()

const SignupForm = () => {
  const form = useForm<RegiterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: initalValues,
  })

  const { mutateAsync, data, isPending, isSuccess } = useMutation({
    mutationFn: async (userDetails: RegiterType) => {
      const data = await authApi.signup(userDetails)
      return data
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], () => data)
    },
  })

  const onSubmit = async (values: RegiterType) => {
    mutateAsync(values)
  }

  return isSuccess ? (
    <EmailVerification email={data?.email} />
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
          isLoading={isPending}
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
