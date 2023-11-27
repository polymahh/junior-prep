import React from "react"
import Link from "next/link"
import { Plus, PlusCircle } from "lucide-react"
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

const teamSchyma = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  description: z.string(),
  repo: z.string().url("Invalid Url"),
  roles: z
    .object({
      name: z.string(),
      stack: z.string(),
    })
    .array(),
})

type teamType = z.infer<typeof teamSchyma>

const CreateTeam = () => {
  const form = useForm

  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <div className="flex h-16 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4  ">
        <PlusCircle className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold flex-1">Create Team</h1>
      </div>
      <div>{/* <Form ></Form> */}</div>
    </div>
  )
}

export default CreateTeam
