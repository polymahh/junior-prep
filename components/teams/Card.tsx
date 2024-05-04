import React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ChevronRight, ExternalLink, Ghost } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"
import { RoleBadge, roleBadgeVariants } from "../ui/role-badge"

export default function Card({ project, creatorRole, Role, creator, id }: any) {
  return (
    <div className="grid grid-cols-3 rounded-md bg-secondary p-4 ">
      <div className="flex  gap-4">
        <Avatar className="h-16 w-16 overflow-hidden rounded-sm bg-primary">
          <AvatarImage src={creator?.image} alt="@shadcn" />
          <AvatarFallback className="flex h-full items-center justify-center text-4xl text-primary-foreground">
            {creator?.username ? creator?.username[0].toUpperCase() : "X"}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="mb-3 flex items-end gap-1">
            By:
            <Link
              className={buttonVariants({
                variant: "outline",
                size: "link",
                className: "justify-start px-2 rounded-sm",
              })}
              href={"/"}
            >
              {/* <Icons.gitHub className="mr-1 h-5" /> */}
              <span>{creator?.username}</span>
            </Link>
          </div>
          <div className="flex gap-2">
            <RoleBadge
              variant={creatorRole}
              tooltip={`Stack: ${
                Role?.find((r: any) => r.roleName === creatorRole)?.stack
              }`}
            >
              {creatorRole}
            </RoleBadge>
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

      <div className="flex items-center">
        <div className="flex flex-col gap-2 flex-1 ">
          <span className="text-sm text-muted-foreground">Roles needed:</span>
          <div className="flex flex-wrap gap-2">
            {Role?.map((role: any) => {
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
        <Link
          href={`/dashboard/teams/${id}`}
          className={buttonVariants({ variant: "link" })}
        >
          <span>View</span> <ChevronRight className="h-4" />
        </Link>
      </div>
    </div>
  )
}
