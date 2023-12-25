import React from "react"
import Link from "next/link"
import { ExternalLink, Pencil } from "lucide-react"

import { getDate } from "@/lib/helpers"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "../icons"
import { Badge, badgeVariants } from "../ui/badge"
import { Button, buttonVariants } from "../ui/button"
import EditTeam from "./EditTeam"

function ProjectInfo({ creator, project, roles }: any) {
  return (
    <div className=" flex h-full flex-col justify-between rounded-lg border p-4">
      {/* creator info */}
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="flex grow items-center gap-4">
          <Avatar className="h-28 w-28">
            <AvatarImage src={creator?.image} alt="creator image" />
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
            Project: {getDate(project?.createdAt)}
          </span>
          <Link
            href={project?.githubRepo ?? ""}
            className="flex items-center justify-center gap-1 self-start rounded-sm bg-secondary p-1"
          >
            <span>{project?.name}</span> <ExternalLink className="h-5 pt-1" />
          </Link>
        </div>
        <EditTeam />
      </div>
      {/* project info */}
      <div className=" flex flex-col gap-8 pt-6  ">
        <div className="flex flex-col justify-start gap-4">
          <span className="border-b text-lg font-semibold">Description:</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
            odio autem facere impedit esse numquam asperiores earum doloremque
            nulla iste sit voluptatum itaque, modi tempore in! Expedita,
            delectus commodi?
          </p>
        </div>
        <div className="flex flex-col gap-4 ">
          <span className="border-b text-lg font-semibold ">Roles:</span>
          <div className="flex gap-4">
            {roles?.map((role: any) => {
              return (
                <Badge
                  key={role.roleName}
                  className={badgeVariants({
                    variant: role.roleName.toLowerCase(),
                  })}
                  tooltip={`Stack: ${role.stack}`}
                >
                  {role.roleName.toLowerCase()}
                </Badge>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInfo
