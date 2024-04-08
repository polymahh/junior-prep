import React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ChevronRight, ExternalLink, Ghost } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { Badge, badgeVariants } from "../ui/badge"
import { buttonVariants } from "../ui/button"

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
                variant: "link",
                size: "link",
                className: "justify-start",
              })}
              href={"/"}
            >
              <Icons.gitHub className="mr-1 h-5" />
              <span>{creator?.username}</span>
            </Link>
          </div>
          <div className="flex gap-2">
            <Badge
              className={badgeVariants({ variant: creatorRole.toLowerCase() })}
              tooltip={`Stack: ${
                Role?.find((r: any) => r.roleName === creatorRole)?.stack
              }`}
            >
              {creatorRole.toLowerCase()}
            </Badge>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 ">
        <span className="text-sm text-muted-foreground">Project repo:</span>
        <Link
          href={`${project?.githubRepo}`}
          target="_blank"
          className="flex items-center justify-center gap-1 self-start rounded-sm bg-secondary-foreground px-2 py-1 text-secondary"
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
                <Badge
                  key={role.roleName}
                  variant={role.roleName.toLowerCase()}
                  tooltip={`Stack: ${role.stack}`}
                >
                  {role.roleName.toLowerCase()}
                </Badge>
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
