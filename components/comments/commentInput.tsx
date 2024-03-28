"use client"

import React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { commentSchema, commentType } from "@/lib/validators/comment"

import { Button, buttonVariants } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form"
import { Textarea } from "../ui/textarea"

function CommentInput() {
  const form = useForm<commentType>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      comment: "",
      email: "",
    },
  })

  const onSubmit = () => {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mb-12">
        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Add comment</FormLabel>
              <FormControl>
                <Textarea placeholder="email@company.com" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button className={buttonVariants({ size: "sm", className: "mt-2" })}>
          Post comment
        </Button>
      </form>
    </Form>
  )
}

export default CommentInput
