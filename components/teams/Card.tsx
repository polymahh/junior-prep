import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"
import { RoleBadge } from "../ui/role-badge"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import React from "react"

export default function Card({ project, Role, creator, id }: any) {
    const router = useRouter()
    return (
        <div
            onClick={() => router.push(`/dashboard/teams/${id}`)}
            className="group flex justify-between items-start rounded-md bg-secondary p-4 flex-wrap gap-4 hover:bg-secondary/50 cursor-pointer "
        >
            <div className=" flex-1 gap-4">
                <div className="p-4 ">{project?.name}</div>
                <div className="flex gap-2 items-center text-muted-foreground">
                    <span>By:</span>

                    <span>{creator?.username}</span>
                </div>
            </div>

            <div className="flex items-start flex-1">
                <div className="flex flex-col gap-2 flex-1 ">
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Roles needed:</span>
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
            </div>
            <div className="flex flex-col gap-2 ">
                <span className="text-sm text-muted-foreground">Project repo:</span>
                <Link
                    href={`${project?.githubRepo}`}
                    target="_blank"
                    className="flex items-center justify-center gap-1 self-start rounded-sm bg-muted px-2 py-1 text-primary"
                >
                    <Icons.gitHub className="h-5" />
                    <span>{project?.name}</span> <ExternalLink className="h-4" />
                </Link>
            </div>
            <Link
                href={`${project?.githubRepo}`}
                target="_blank"
                className={buttonVariants({
                    variant: "outline",
                    className: "h-auto py-1 self-center rounded-md group-hover:visible invisible px-0",
                })}
            >
                <span className="whitespace-nowrap text-xs">Project</span> <ExternalLink className="h-4" />
            </Link>
        </div>
    )
}
