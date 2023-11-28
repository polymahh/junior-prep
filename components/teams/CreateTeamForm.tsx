"use client"

import React from "react"
import Link from "next/link"
import { useForm } from "react-hook-form"
import * as z from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { Checkbox } from "../ui/checkbox"

const roles = [
  {
    name: "frontend",
    stack: "",
  },
  {
    name: "backend",
    stack: "",
  },
  {
    name: "design",
    stack: "",
  },
  {
    name: "senior",
    stack: "",
  },
] as const

const teamSchyma = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  description: z.string(),
  repo: z.string().url({ message: "Invalid Url" }),
  roles: z
    .object({
      name: z.string(),
      stack: z.string(),
    })
    .array()
    .nonempty({
      message: "You have to select at least one role.",
    }),
})

// z.object({
//     name: z.string(),
//     stack: z.string(),
//   })

type teamType = z.infer<typeof teamSchyma>

function CreateTeamForm() {
  const form = useForm<teamType>({
    defaultValues: {
      name: "",
      description: "",
      repo: "",
      roles: [{ name: "frontend", stack: "" }],
    },
  })

  const onSubmit = () => {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col  space-y-6  sm:w-[600px] "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Project name</FormLabel>
              <FormControl>
                <Input placeholder="Project" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repo"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Project Repo</FormLabel>
              <FormControl>
                <Input placeholder="Github url" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repo"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Project Repo</FormLabel>
              <FormControl>
                <Textarea placeholder="Type your message here." />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="p-4 bg-muted text-muted-foreground">
          below you can add the roles you need in this Project <br />
          add languages and technologies used for a role
        </div>
        {roles.map((role, idx) => {
          return (
            <div className="space-y-3">
              <FormField
                key={role.name}
                control={form.control}
                name="roles"
                render={({ field }) => {
                  return (
                    <FormItem
                      key={role.name}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={
                            !!field.value?.find((r) => r.name == role.name)
                          }
                          onCheckedChange={(checked) => {
                            console.log(field)
                            return checked
                              ? field.onChange([...field.value, role])
                              : field.onChange(
                                  field.value?.filter(
                                    (value) => value.name !== role.name
                                  )
                                )
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal capitalize">
                        {role.name}
                      </FormLabel>
                    </FormItem>
                  )
                }}
              />
              <FormField
                disabled
                control={form.control}
                name={`roles.${idx}.stack`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm text-accent-foreground">
                      stack{" "}
                    </FormLabel>
                    <FormControl>
                      <Input
                        hidden={!!form.getValues("roles").includes(role)}
                        placeholder="languages or technologies used"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )
        })}
      </form>
    </Form>
  )
}

export default CreateTeamForm
