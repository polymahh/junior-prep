"use client"

import { buttonVariants } from "../ui/button"
import Card from "./Card"
import { teamsApi } from "@/lib/api/teamsApi"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { useQuery } from "@tanstack/react-query"
import { ChevronRight, ExternalLink, Ghost, Plus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

function TeamDashboardList() {
    const { data, isSuccess } = useQuery({
        queryKey: ["teams"],
        queryFn: () => teamsApi.getTeams(),
    })

    return (
        <div className="flex h-full flex-col gap-6 border p-4 rounded-lg">
            <div className=" flex justify-between  pb-1">
                <span className="text-lg font-semibold">Teams:</span>
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
            <div className="flex h-full flex-col gap-6 ">
                {isSuccess &&
                    data?.teams?.map((team: any) => <Card key={team.id} project={team.Project[0]} {...team} />)}
            </div>
        </div>
    )
}

export default TeamDashboardList
