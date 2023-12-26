"use client"

import React from "react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Users } from "lucide-react"

import { getItems } from "@/lib/resquest"
import Comments from "@/components/comments"
import CreatorCard from "@/components/creatorCard"
import ProjectDescription from "@/components/projectDescription"
import Roles from "@/components/roles"

import ProjectInfo from "./ProjectInfo"

function TeamPreview({ teamid }: { teamid: string }) {
  const queryClient = useQueryClient()
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["teams", teamid],
    queryFn: () => getItems(`/api/teams/${teamid}`),
    initialData: () => {
      const team = queryClient
        .getQueryData<{ teams?: [] }>(["teams"])
        ?.teams?.find((team: any) => team.id === teamid)
      return team
    },
  })

  const team = data?.team

  return isSuccess ? (
    <>
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Users className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold">{team?.project?.name}</h1>
      </div>
      <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
        <div className="col-span-2 row-span-2 ">
          <ProjectInfo {...team} />
        </div>
        <Comments />
        <Roles />
      </div>
    </>
  ) : (
    "loading ..."
  )
}

export default TeamPreview
