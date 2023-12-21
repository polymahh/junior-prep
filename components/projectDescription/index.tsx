"use client"

import React from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Icons } from "../icons"
import { Badge, badgeVariants } from "../ui/badge"

function ProjectDescription() {
  return (
    <div className="ju flex flex-col h-full gap-8  rounded-lg border p-4">
      <div className="flex flex-col justify-start gap-4 flex-1 ">
        <span className="border-b text-lg font-semibold ">Description:</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut
          odio autem facere impedit esse numquam asperiores earum doloremque
          nulla iste sit voluptatum itaque, modi tempore in! Expedita, delectus
          commodi?
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        <span className="border-b text-lg font-semibold ">Roles:</span>
        <div className="flex gap-4">
          <Badge
            className={badgeVariants({
              variant: "frontend",
            })}
          >
            Frontend
          </Badge>
          <Badge
            className={badgeVariants({
              variant: "senior",
            })}
          >
            Senior
          </Badge>
          <Badge
            className={badgeVariants({
              variant: "backend",
            })}
          >
            Backend
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default ProjectDescription
