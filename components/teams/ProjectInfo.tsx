import { Icons } from "../icons"
import { RoleBadge, roleBadgeVariants } from "../ui/role-badge"
import EditTeam from "./EditTeam"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { userRoleType } from "@/lib/validators/userRole"
import { Project, Role, User } from "@prisma/client"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import React from "react"

function ProjectInfo({
    creator,
    project,
    roles,
    creatorRole,
    id,
}: {
    creator: User
    project: Project
    roles: Role[]
    creatorRole: userRoleType
    id: string
}) {
    return (
        <div className=" flex h-full flex-col  rounded-lg  p-4">
            {/* creator info */}
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex grow items-center gap-4">
                    <Avatar className="h-28 w-28">
                        <AvatarImage src={creator?.image || ""} alt="creator image" />
                        <AvatarFallback className="text-4xl">PM</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-2xl">{creator?.username}</h2>
                        <Link
                            href={`https://github.com/${creator?.githubId}`}
                            className="flex items-center gap-1 text-highlight"
                        >
                            <Icons.gitHub className=" h-4 w-4" />
                            <span>Github</span>
                        </Link>
                    </div>
                </div>
                <div className="flex grow flex-col gap-1">
                    <span className=" text-sm text-muted-foreground">
                        Project: {new Date(project?.createdAt).toISOString().split("T")[0]}
                    </span>
                    <Link
                        href={project?.githubRepo ?? ""}
                        className="flex items-center justify-center gap-1 self-start rounded-sm bg-secondary p-1"
                    >
                        <span>{project?.name}</span> <ExternalLink className="h-5 pt-1" />
                    </Link>
                </div>
                <EditTeam team={{ creator, project, roles, creatorRole, id }} />
            </div>
            {/* project info */}
            <div className=" flex flex-col gap-8 pt-6 h-full  ">
                <div className="flex flex-col grow justify-start gap-4">
                    <span className="border-b text-lg font-semibold">Description:</span>
                    <p>{project?.description}</p>
                </div>
                <div className="flex flex-col gap-4 ">
                    <span className="border-b text-lg font-semibold ">Roles:</span>
                    <div className="flex gap-4">
                        {roles?.map(role => {
                            return (
                                <RoleBadge key={role.roleName} variant={role.roleName} tooltip={`Stack: ${role.stack}`}>
                                    {role.roleName}
                                </RoleBadge>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo
