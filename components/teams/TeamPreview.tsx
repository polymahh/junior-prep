"use client"

import { useEffect, useState } from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Users } from "lucide-react"

import { teamsApi } from "@/lib/api/teamsApi"
import { getItems } from "@/lib/resquest"
import Comments from "@/components/comments"
import Roles from "@/components/roles"

import MemberSection from "../members/MemberSection"
import ProjectInfo from "./ProjectInfo"

function TeamPreview({ teamid }: { teamid: string }) {
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["teams", teamid],
    queryFn: () => teamsApi.getTeam(teamid),
  })

  return isSuccess ? (
    <>
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Users className="h-10 rounded-sm" />
        <h1 className="text-lg font-semibold">{data?.project?.name}</h1>
      </div>
      <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
        <div className="col-span-2 row-span-2 ">
          <ProjectInfo {...data} />
        </div>
        <Comments />
        {/* <MemberSection /> */}
      </div>
    </>
  ) : (
    "loading ..."
  )
}

export default TeamPreview
