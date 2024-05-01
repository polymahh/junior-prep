"use client"

import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useForm } from "react-hook-form"

import { teamsApi } from "@/lib/api/teamsApi"
import { cn } from "@/lib/utils"
import { teamSchema, teamType } from "@/lib/validators/teams"
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { queryClient } from "@/app/layout"

import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"

const defaultRoles = [
  {
    active: true,
    roleName: "FRONTEND",
    stack: "",
  },
  {
    active: false,
    roleName: "BACKEND",
    stack: "",
  },
  {
    active: false,
    roleName: "DESIGN",
    stack: "",
  },
  {
    active: false,
    roleName: "SENIOR",
    stack: "",
  },
] as const

function CreateTeamForm({ team, setOpen }: any) {
  //TODO: needs team response type
  const router = useRouter()

  const form = useForm<teamType>({
    resolver: zodResolver(teamSchema),
    mode: "onChange",
    defaultValues: !!team
      ? {
          name: team?.project?.name,
          description: team?.project?.description,
          repo: team?.project?.githubRepo,
          roles: defaultRoles.map((role) => {
            let temp_role = team?.roles.find(
              (r) => role.roleName === r.roleName
            )
            if (temp_role) {
              return { ...temp_role, active: true }
            } else return role
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

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (values: teamType) => {
      const teamData = {
        name: values.name,
        description: values.description,
        roles: values.roles
          .filter((role) => role.active)
          .map((role) => ({ stack: role.stack, roleName: role.roleName })),
        repo: values.repo,
        creatorRole: values.creatorRole,
      }
      const data = !team
        ? await teamsApi.newTeam(teamData)
        : await teamsApi.updateTeam(teamData, team.id)
      return data
    },
    onSuccess: async (data) => {
      console.log("🚀 ~ onSuccess: ~ data:", data)
      await queryClient.invalidateQueries({ queryKey: ["teams"] })
      if (!team) {
        console.log("new team created")
        router.push(`/dashboard/teams/${data.team.id}`)
      } else {
        console.log("edit team")
        await queryClient.invalidateQueries({
          queryKey: ["teams", team.id],
        })
        setOpen(false)
      }
    },
  })

  const onSubmit = async (values: teamType) => {
    console.log("🚀 ~ onSubmit ~ values:", values)
    mutateAsync(values)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col  space-y-6 mx-auto sm:w-[600px] "
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
          console.log(
            "🚀 ~ {defaultRoles.map ~ form.getValues(roles):",
            form.getValues("roles")
          )

          return (
            <div key={role.roleName} className="space-y-3">
              <FormField
                control={form.control}
                name={`roles.${idx}.active`}
                render={({ field }) => {
                  return (
                    <FormItem
                      key={role.roleName}
                      className="flex flex-row items-start space-x-3 space-y-0"
                    >
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked: boolean) => {
                            console.log(
                              "🚀 ~ {defaultRoles.map ~ checked:",
                              checked
                            )
                            form.setValue(`roles.${idx}.active`, checked)
                          }}
                        />
                      </FormControl>

                      <FormLabel className="font-normal capitalize">
                        {role.roleName}
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )
                }}
              />
              <FormField
                disabled={
                  !form
                    .getValues("roles")
                    .find((r) => role.roleName === r.roleName)?.active
                }
                control={form.control}
                name={`roles.${idx}.stack`}
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel
                      className={cn("text-sm  text-accent-foreground ", {
                        "text-muted-foreground": !form
                          .getValues("roles")
                          .find((r) => role.roleName === r.roleName)?.active,
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
                <FormDescription className="w-full">
                  choose your role as a team member
                </FormDescription>
                <SelectContent>
                  {form
                    .getValues("roles")
                    .filter((r) => r.active)
                    .map((role) => (
                      <SelectItem key={role.roleName} value={role.roleName}>
                        {role.roleName}
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
