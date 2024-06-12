import { Button } from "../ui/button"
import { RoleBadge } from "../ui/role-badge"
import { toast } from "../ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { TeamCardType } from "@/types/global"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import {
    Bookmark,
    Check,
    CheckCheck,
    ClipboardCopy,
    LinkIcon,
    MessageSquareText,
    Share,
    SquareArrowOutUpRight,
} from "lucide-react"
import { useRouter } from "next/navigation"
import React, { forwardRef, useState } from "react"

export const TeamCard = forwardRef<HTMLDivElement, TeamCardType>(
    ({ name, description, createdAt, isCompleted, roles, creator, id }, ref) => {
        const router = useRouter()
        const actions = [
            {
                name: "Comment",
                icon: <MessageSquareText className="h-4" />,
                action: (e: React.MouseEvent) => {
                    e.stopPropagation()
                    router.push(`/dashboard/teams/${id}#comment`)
                },
            },
            {
                name: "Copy Link",
                icon: <ClipboardCopy className=" h-4" />,
                action: (e: React.MouseEvent) => {
                    e.stopPropagation()
                    navigator.clipboard.writeText(`${window.location.origin}/dashboard/teams/${id}`)
                    toast({
                        description: (
                            <span className="flex text-sm text-easy items-center gap-1">
                                Link Copied!
                                <CheckCheck />
                            </span>
                        ),
                    })
                },
            },
            {
                name: "Share",
                icon: <Share className="h-4" />,
                action: (e: React.MouseEvent) => {
                    e.stopPropagation()
                    navigator.share({
                        title: name,
                        text: description,
                        url: `${window.location.origin}/dashboard/teams/${id}`,
                    })
                },
            },
        ]
        return (
            <div
                ref={ref}
                onClick={() => router.push(`/dashboard/teams/${id}`)}
                className="group  flex flex-col xl:flex-row justify-between rounded-md bg-secondary  hover:bg-secondary/50 cursor-pointer gap-4 p-4 "
            >
                <div className="basis-1/2 flex flex-col gap-4 ">
                    <div className="flex items-center gap-4 w-full">
                        <Avatar className="min-h-[64px] min-w-[64px] max-h-[64px] max-w-[64px] md:h-16 md:w-16  overflow-hidden rounded-full bg-muted-foreground shadow-lg">
                            <AvatarImage src={creator?.image || ""} alt="@shadcn" />
                            <AvatarFallback className="flex h-full items-center justify-center text-2xl text-primary-foreground">
                                {creator?.username ? creator?.username[0].toUpperCase() : "?"}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col gap-1 grow max-w-[calc(100%-40px)]">
                            <div className="text-xl tracking-wider font-semibold capitalize flex flex-nowrap whitespace-nowrap grow w-[80%] max-w-full ">
                                <span className="truncate">{name}</span>
                                <Button variant={"ghost"} className="ml-1 p-2 h-6 rounded-sm">
                                    <SquareArrowOutUpRight className="h-4" />
                                </Button>
                            </div>
                            <span
                                className={cn(
                                    "self-start text-[9px] text-primary px-1 py-0.5 uppercase rounded-sm ",
                                    isCompleted ? "bg-again/40" : "bg-easy/70",
                                )}
                            >
                                {isCompleted ? "Completed" : "In progress"}
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-1 max-h-8 ">
                        <p className="text-xs  line-clamp-2 text-muted-foreground ">
                            <span className="text-xs text-primary">Description:</span> {description}
                        </p>
                    </div>
                </div>
                <div className="h-full w-px bg-border " />
                <div className=" flex flex-col justify-between grow gap-2 ">
                    <div>
                        <span className="text-xs text-muted-foreground">Roles needed:</span>
                        <div className="flex flex-wrap gap-2">
                            {roles?.map((role: any) => {
                                return (
                                    <RoleBadge
                                        key={role.roleName}
                                        variant={role.roleName}
                                        tooltip={`Stack: ${role.stack}`}
                                    >
                                        {role.roleName}
                                    </RoleBadge>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-between items-center text-muted-foreground">
                        <div className="flex items-baseline gap-4 justify-between">
                            <div className="text-xs text-muted-foreground">By:{creator?.username ?? "missing?"}</div>
                        </div>
                        <span className="text-xs text-muted-foreground hidden xs:block">
                            {new Date(createdAt).toISOString().split("T")[0]}
                        </span>
                        <div className="flex items-baseline gap-1">
                            {actions.map(action => {
                                return (
                                    <TooltipProvider key={action.name} delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <Button
                                                    onClick={action.action}
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
    },
)

TeamCard.displayName = "TestCard"

export default TeamCard
