"use client"

import { useEffect, useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { roleName } from "@prisma/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { postItems, putItems } from "@/lib/resquest"
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

const defaultRoles = [
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

function CreateTeamForm({ team, setOpen }: any) {
  //TODO: needs team response type
  const [values, setValues] = useState<any>()
  const router = useRouter()

  const form = useForm<teamType>({
    mode: "onChange",
    defaultValues: !!team
      ? {
          name: team?.project?.name,
          description: team?.project?.description,
          repo: team?.project?.githubRepo,
          roles: team?.roles?.map((role: any) => {
            return { stack: role.stack, name: role.roleName, active: true }
          }),
          creatorRole: team?.creatorRole,
        }
      : {
          name: "",
          description: "",
          repo: "",
          roles: [...defaultRoles],
          creatorRole: "",
        },
  })

  form.watch("roles")

  const queryClient = useQueryClient()

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () => {
      const data = !team
        ? await postItems(values, "/api/teams")
        : await putItems(values, `/api/teams/${team.id}`)
      return data
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({ queryKey: ["teams"] })
      if (!team) {
        router.push(`/dashboard/teams/${team.id}`)
      } else {
        await queryClient.invalidateQueries({
          queryKey: ["teams", team.id],
        })
        setOpen(false)
      }
    },
  })

  const onSubmit = async (values: teamType) => {
    setValues({
      name: values.name,
      description: values.description,
      roles: values.roles.filter((role) => role.active),
      repo: values.repo,
      creatorRole: values.creatorRole,
    })

    mutateAsync()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col  space-y-6  sm:w-[600px] "
      >
        {!team && (
          <div className="bg-muted p-4 text-muted-foreground">
            Create a project repo on github <br />
            write a description for your project:
            <br />
            - what this project about <br />- roles needed and stack used
          </div>
        )}
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
        {!team && (
          <div className="bg-muted p-4 text-muted-foreground">
            below you can add the roles you need in this Project <br />
            and add languages, technologies used for a role
          </div>
        )}
        {defaultRoles.map((role, idx) => {
          return (
            <div key={role.name} className="space-y-3">
              <FormField
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
                      <SelectItem key={role.name} value={role.name}>
                        {role.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />
        <Button type="submit" className="self-center" isLoading={isPending}>
          {!team ? "Create Team" : "Edit Team"}
        </Button>
      </form>
    </Form>
  )
}

export default CreateTeamForm
