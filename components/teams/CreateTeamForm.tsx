"use client"

import { Button } from "../ui/button"
import { Checkbox } from "../ui/checkbox"
import { Switch } from "../ui/switch"
import { toast } from "../ui/use-toast"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { teamsApi } from "@/lib/api/teamsApi"
import { cn } from "@/lib/utils"
import { teamSchema, teamType } from "@/lib/validators/teams"
import { TeamCardType } from "@/types/global"
import { zodResolver } from "@hookform/resolvers/zod"
import { Role } from "@prisma/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"

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
        roleName: "FULLSTACK",
        stack: "",
    },
] as const

function CreateTeamForm({
    team,
    setOpen,
}: {
    team?: TeamCardType
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const router = useRouter()

    const form = useForm<teamType>({
        resolver: zodResolver(teamSchema),
        mode: "onChange",
        defaultValues: !!team
            ? {
                  name: team?.name,
                  description: team?.description,
                  repo: team?.githubRepo,
                  roles: defaultRoles.map(role => {
                      let temp_role = team?.roles.find((r: Role) => role.roleName === r.roleName)
                      if (temp_role) {
                          return { ...temp_role, active: true }
                      } else return role
                  }),
                  isCompleted: team?.isCompleted,
              }
            : {
                  name: "",
                  description: "",
                  repo: "",
                  roles: [...defaultRoles],
              },
    })

    form.watch("roles")

    const { mutateAsync, isPending } = useMutation({
        mutationFn: async (values: any) => {
            const data = !team ? await teamsApi.newTeam(values) : await teamsApi.updateTeam(values, team.id)
            return data
        },
    })

    const queryClient = useQueryClient()

    const onSubmit = async (values: teamType) => {
        const teamData = {
            name: values.name,
            description: values.description,
            roles: values.roles
                .filter(role => role.active)
                .map(role => ({ stack: role.stack, roleName: role.roleName })),
            repo: values.repo,
            isCompleted: !team ? false : values.isCompleted,
        }
        mutateAsync(teamData, {
            onSuccess: async data => {
                if (!team) {
                    router.push(`/dashboard/teams/${data.team.id}`)
                } else {
                    await queryClient.setQueryData(["teams", data.team.id], (oldData: any) => {
                        return {
                            ...oldData,
                            project: {
                                ...oldData.project,
                                description: teamData.description,
                                githubRepo: teamData.repo,
                                name: teamData.name,
                            },
                        }
                    })
                    if (setOpen) {
                        setOpen(false)
                        queryClient.invalidateQueries({ queryKey: ["teams", `${team.id}`] })
                    }

                    queryClient.invalidateQueries({ queryKey: ["teams"] })
                }
            },
            onError: err => {
                console.log("toast errr", err)
                toast({
                    title: "Something went Wrong!",
                    description: err.message,
                    variant: "destructive",
                })
            },
        })
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
                {!!team && (
                    <FormField
                        control={form.control}
                        name="isCompleted"
                        render={({ field }) => (
                            <FormItem className="w-full flex items-center gap-4">
                                <FormLabel className="text-lg  h-6">Project completed ?</FormLabel>
                                <FormControl>
                                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>

                                <FormMessage />
                            </FormItem>
                        )}
                    />
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
                                <Textarea placeholder="Type your description here." {...field} />
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
                                                        console.log("🚀 ~ {defaultRoles.map ~ checked:", checked)
                                                        form.setValue(`roles.${idx}.active`, checked)
                                                    }}
                                                />
                                            </FormControl>

                                            <FormLabel className="font-normal capitalize">{role.roleName}</FormLabel>
                                            <FormMessage />
                                        </FormItem>
                                    )
                                }}
                            />
                            <FormField
                                disabled={!form.getValues("roles").find(r => role.roleName === r.roleName)?.active}
                                control={form.control}
                                name={`roles.${idx}.stack`}
                                render={({ field }) => (
                                    <FormItem className="w-full">
                                        <FormLabel
                                            className={cn("text-sm  text-accent-foreground ", {
                                                "text-muted-foreground": !form
                                                    .getValues("roles")
                                                    .find(r => role.roleName === r.roleName)?.active,
                                            })}
                                        >
                                            stack
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="languages or technologies used" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                    )
                })}

                <Button type="submit" className="self-center" isLoading={isPending}>
                    {!team ? "Create Team" : "Edit Team"}
                </Button>
            </form>
        </Form>
    )
}

export default CreateTeamForm
