"use client"

import { useEffect, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { roleName } from "@prisma/client"
import { useForm } from "react-hook-form"

import { cn } from "@/lib/utils"
import { teamType } from "@/lib/validators/teams"
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

import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

const roles = [
  {
    active: true,
    name: "FRONTEND",
    stack: "",
  },
  {
    active: false,
    name: "BACKEND",
    stack: "",
  },
  {
    active: false,
    name: "DESIGN",
    stack: "",
  },
  {
    active: false,
    name: "SENIOR",
    stack: "",
  },
] as const

function CreateTeamForm() {
  const [status, setStatus] = useState(0)
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)

  const router = useRouter()

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
    console.log("🚀 ~ file: CreateTeamForm.tsx:66 ~ onSubmit ~ values:", values)
    setLoading(true)
    const responce = await fetch("/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        description: values.description,
        roles: values.roles.filter((role) => role.active),
        repo: values.repo,
        creatorRole: values.creatorRole,
      }),
    })
      .then((res) => {
        setStatus(res.status)
        return res.json()
      })
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }

  useEffect(() => {
    if (status === 201) {
      console.log(data?.message)
      router.push(`/dashboard/teams/${data?.team?.id}`)
    } else {
      console.log(data?.message)
      setLoading(false)
    }
  }, [data])
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
                      className={cn("text-sm  text-accent-foreground ", {
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
        <Button type="submit" className="self-center" disabled={loading}>
          Create Team
        </Button>
      </form>
    </Form>
  )
}

export default CreateTeamForm
