import { Button } from "../ui/button"
import { RoleBadge } from "../ui/role-badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { Project, Role, User } from "@prisma/client"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Bookmark, LinkIcon, MessageSquareText, SquareArrowOutUpRight } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

export default function TeamCard({
    project,
    Role,
    creator,
    id,
}: {
    project: Project
    Role: Role[]
    creator: User
    id: string
}) {
    const router = useRouter()
    const actions = [
        {
            name: "Comment",
            icon: <MessageSquareText className="h-4" />,
            // action: () => router.push(`/dashboard/teams/${id}#comment`)
        },
        {
            name: "Bookmark",
            icon: <Bookmark className=" h-4" />,
            // action : () => window.b
        },
        {
            name: "share",
            icon: <LinkIcon className="h-4" />,
            // action: () => Clipboard.writeText(window.location.href),
        },
    ]
    return (
        <div
            onClick={() => router.push(`/dashboard/teams/${id}`)}
            className="group  flex flex-col xl:flex-row justify-between rounded-md bg-secondary  hover:bg-secondary/50 cursor-pointer gap-4 p-4 "
        >
            <div className="basis-1/2 flex flex-col gap-4 ">
                <div className="flex items-center gap-4 w-full">
                    <Avatar className="min-h-[36px] min-w-[36px] md:h-16 md:w-16  overflow-hidden rounded-full bg-muted-foreground shadow-lg">
                        <AvatarImage src={creator?.image || ""} alt="@shadcn" />
                        <AvatarFallback className="flex h-full items-center justify-center text-2xl text-primary-foreground">
                            {creator?.username ? creator?.username[0].toUpperCase() : "?"}
                        </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col gap-1 grow max-w-[calc(100%-40px)]">
                        <div className="text-xl tracking-wider font-semibold capitalize flex flex-nowrap whitespace-nowrap grow w-[80%] max-w-full ">
                            <span className="truncate   ">{project?.name}</span>
                            <Button variant={"ghost"} className="ml-1 p-2 h-6 rounded-sm">
                                <SquareArrowOutUpRight className="h-4" />
                            </Button>
                        </div>
                        <span
                            className={cn(
                                "self-start text-[9px] text-primary px-1 py-0.5 uppercase rounded-sm ",
                                project.isCompleted ? "bg-again/40" : "bg-easy/70",
                            )}
                        >
                            {project.isCompleted ? "Completed" : "In progress"}
                        </span>
                    </div>
                </div>
                <div className="flex gap-1 max-h-8 ">
                    <p className="text-xs  line-clamp-2 text-muted-foreground ">
                        <span className="text-xs text-primary">Description:</span> {project.description}
                    </p>
                </div>
            </div>
            <div className="h-full w-px bg-border " />
            <div className=" flex flex-col justify-between grow gap-2 ">
                <div>
                    <span className="text-xs text-muted-foreground">Roles needed:</span>
                    <div className="flex flex-wrap gap-2">
                        {Role?.map((role: any) => {
                            return (
                                <RoleBadge key={role.roleName} variant={role.roleName} tooltip={`Stack: ${role.stack}`}>
                                    {role.roleName}
                                </RoleBadge>
                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-between items-center text-muted-foreground">
                    <div className="flex items-baseline gap-4 justify-between">
                        <div className="text-xs text-muted-foreground">By:{creator.username}</div>
                    </div>
                    <span className="text-xs text-muted-foreground hidden xs:block">
                        {new Date(project?.createdAt).toISOString().split("T")[0]}
                    </span>
                    <div className="flex items-baseline gap-1">
                        {actions.map((action, index) => {
                            return (
                                <TooltipProvider key={index} delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button
                                                key={action.name}
                                                variant={"ghost"}
                                                size={"icon"}
                                                className="h-8 px-1 rounded-sm"
                                            >
                                                {action.icon}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <span>{action.name}</span>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
