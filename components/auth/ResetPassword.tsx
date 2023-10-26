"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const resetSchema = z.object({
  email: z.string().email("Invalid email address"),
})

type resetType = z.infer<typeof resetSchema>

function ResetPassword() {
  const form = useForm<resetType>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: resetType) {
    console.log(values)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="px-0  text-highlight">
          Forgot Password?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Rest your Password</DialogTitle>
          <DialogDescription>
            Enter the email associated with your account and we&apos;ll send you
            a reset link.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col space-y-6 px-8  "
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

            <Button
              className={buttonVariants({
                variant: "outline",
              })}
            >
              Reset Password
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ResetPassword
