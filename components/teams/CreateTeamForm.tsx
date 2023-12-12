"use client"

import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTeam } from "@/app/dashboard/teams/actions"

import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

const roles = [
  {
    active: true,
    name: "frontend",
    stack: "",
  },
  {
    active: false,
    name: "backend",
    stack: "",
  },
  {
    active: false,
    name: "design",
    stack: "",
  },
  {
    active: false,
    name: "senior",
    stack: "",
  },
] as const

const teamSchyma = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters" })
    .max(50, { message: "Username must be less than 50 characters" }),
  description: z.string().min(1),
  repo: z.string().url({ message: "Invalid Url" }),
  creatorRole: z.string({ required_error: "choose at least one role" }).min(1),
  roles: z
    .object({
      active: z.boolean(),
      name: z.string(),
      stack: z.string(),
    })
    .array()
    .nonempty({
      message: "You have to select at least one role.",
    }),
})

type teamType = z.infer<typeof teamSchyma>

function CreateTeamForm() {
  const form = useForm<teamType>({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      repo: "",
      roles: [...roles],
      creatorRole: "",
    },
  })

  form.watch("roles")

  const onSubmit = async (values: teamType) => {
    // setLoading(true)
    const responce = await fetch("/api/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        description: values.description,
        roles: values.roles,
        repo: values.repo,
      }),
    })

    if (responce.ok) {
      // setLoading(false)
      console.log(responce.body)
    } else {
      // setLoading(false)
      console.log("Registration failed")
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col  space-y-6  sm:w-[600px] "
      >
        <div className="p-4 bg-muted text-muted-foreground">
          Create a project repo on github <br />
          write a description for your project:
          <br />
          - what this project about <br />- roles needed and stack used
        </div>
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
          name="description"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Project Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your description here."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="p-4 bg-muted text-muted-foreground">
          below you can add the roles you need in this Project <br />
          and add languages, technologies used for a role
        </div>
        {roles.map((role, idx) => {
          return (
            <div className="space-y-3">
              <FormField
                key={role.name}
                control={form.control}
                name={`roles.${idx}.active`}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={role.name}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked: boolean) => {
                            console.log(checked)
                            form.setValue(`roles.${idx}.active`, checked)
                          }}
                        />
                      </FormControl>
                      <FormLabel className="font-normal capitalize">
                        {role.name}
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              <FormField
                disabled={
                  !form.getValues("roles").find((r) => role.name === r.name)
                    ?.active
                }
                control={form.control}
                name={`roles.${idx}.stack`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel
                      className={cn("text-sm text-accent-foreground", {
                        "text-muted-foreground": !form
                          .getValues("roles")
                          .find((r) => role.name === r.name)?.active,
                      })}
                    >
                      stack
                    </FormLabel>
                    <FormControl>
                      <Input
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
        <FormField
          control={form.control}
          name="creatorRole"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-lg">Your Role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {form
                    .getValues("roles")
                    .filter((r) => r.active)
                    .map((role) => (
                      <SelectItem value={role.name}>{role.name}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" className="self-center">
          Create Team
        </Button>
      </form>
    </Form>
  )
}

export default CreateTeamForm
