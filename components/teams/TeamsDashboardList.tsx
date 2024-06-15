"use client"

import { buttonVariants } from "../ui/button"
import TeamCard from "./TeamCard"
import { teamsApi } from "@/lib/api/teamsApi"
import { TeamCardType } from "@/types/global"
import { useQuery } from "@tanstack/react-query"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import React from "react"

function TeamDashboardList() {
    const { data, isSuccess, isLoading } = useQuery({
        queryKey: ["teams", "new"],
        queryFn: () =>
            teamsApi.getTeams({
                search: "",
                statusSort: undefined,
                dateSort: undefined,
                limit: "4",
                length: "0",
            }),
    })

    return (
        <div className="flex h-full flex-col gap-6 border p-4 rounded-lg">
            <div className=" flex justify-between  pb-1">
                <span className="text-lg font-semibold">Latest Teams:</span>
                <Link
                    className={buttonVariants({
                        variant: "link",
                        size: "link",
                        className: "justify-start",
                    })}
                    href={"/dashboard/teams"}
                >
                    <span>See More</span>
                    <ExternalLink className="h-4" />
                </Link>
            </div>
            <div className="flex h-full flex-col gap-6 grow">
                {isLoading ? <div>Loading ...</div> : null}
                {isSuccess && data?.map((team: TeamCardType, index: number) => <TeamCard key={index} {...team} />)}
            </div>
        </div>
    )
}

export default TeamDashboardList
