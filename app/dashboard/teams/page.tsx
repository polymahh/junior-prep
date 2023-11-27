import React from "react"
import Link from "next/link"
import { Plus, Users } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import TeamsCard from "@/components/teamsCard"

const teams = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <div className="flex h-16 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4  ">
        <Users className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold flex-1">Teams</h1>
        <Link
          href={"teams/create_team"}
          className={buttonVariants({
            variant: "outline",
            size: "sm",
            className: "rounded-full",
          })}
        >
          <Plus className="h-5 w-5 mr-1" />
          Create Team
        </Link>
      </div>
      <div>
        <TeamsCard />
      </div>
    </div>
  )
}

export default teams
