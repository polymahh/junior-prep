"use client"

import { buttonVariants } from "../ui/button"
import TeamCard from "./TeamCard"
import { teamsApi } from "@/lib/api/teamsApi"
import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import Link from "next/link"
import React from "react"

function TeamList() {
    const { data, isSuccess } = useQuery({
        queryKey: ["teams"],
        queryFn: () => teamsApi.getTeams(),
    })

    return (
        <div className="flex h-full flex-col gap-6 container px-0 sm:px-4 ">
            <div className=" flex justify-between  pb-1">
                {/* TODO: add search and sort */}
                {/* TODO: add infinite scroll */}
                <Link
                    href={"teams/create"}
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
            <div className="grid grid-cols-1    gap-4 ">
                {isSuccess &&
                    data?.teams?.map((team: any) => <TeamCard key={team.id} project={team.Project[0]} {...team} />)}
            </div>
        </div>
    )
}

export default TeamList
