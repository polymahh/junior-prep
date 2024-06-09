"use client"

import { buttonVariants } from "../ui/button"
import TeamCard from "./TeamCard"
import TeamFilters from "./TeamFilters"
import useDebounce from "@/hooks/useDebounce"
import useScrollObserver from "@/hooks/useScrollObserver"
import { teamsApi } from "@/lib/api/teamsApi"
import { TeamCardType } from "@/types/global"
import { Team } from "@prisma/client"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useMemo, useState } from "react"

function TeamList() {
    const [teams, setTeams] = useState<TeamCardType[]>([])
    const [search, setSearch] = useState("")
    const [dateSort, setDateSort] = useState(undefined)
    const [statusSort, setStatusSort] = useState(undefined)
    const limit = "10"
    const debounceValue = useDebounce(search, 9000)

    // const { data, isSuccess } = useQuery({
    //     queryKey: ["teams"],
    //     queryFn: () => teamsApi.getTeams(),
    // })

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error, isSuccess } = useInfiniteQuery({
        queryKey: ["teams", { debounceValue, statusSort, dateSort }],
        getNextPageParam: (lastPage: TeamCardType[], pages) => {
            if (lastPage?.length === 0) {
                return null
            }
            return pages?.length
        },
        retry: false,
        // enabled: enableCall,
        initialPageParam: 0,
        queryFn: async ({ pageParam }) =>
            teamsApi.getTeams({
                search: debounceValue,
                statusSort,
                dateSort,
                limit,
                length: (pageParam * Number(limit)).toString(),
            }),
    })

    const lastItem = useScrollObserver(fetchNextPage, isFetchingNextPage, hasNextPage, error)

    useEffect(() => {
        console.log("🚀 ~ TeamFilters ~ dateSort:", dateSort)
        console.log("🚀 ~ TeamFilters ~ statusSort:", statusSort)
        console.log("🚀 ~ TeamList ~ data:", data)
    }, [dateSort, statusSort, debounceValue, isSuccess])

    useEffect(() => {
        setTeams((data?.pages as TeamCardType[][])?.flat())
    }, [data])

    return (
        <div className="flex h-full flex-col gap-6 container px-0 sm:px-4 ">
            <div className=" flex justify-between pb-12 items-start gap-4">
                {/* TODO: add search and sort */}
                {/* TODO: add infinite scroll */}
                <TeamFilters
                    setDateSort={setDateSort}
                    setStatusSort={setStatusSort}
                    setSearch={setSearch}
                    search={search}
                />
                <Link
                    href={"teams/create"}
                    className={buttonVariants({
                        className: " rounded-sm whitespace-nowrap bg-again",
                    })}
                >
                    <Plus className="h-5 w-5 mr-1" />
                    Create Team
                </Link>
            </div>
            <div className="grid grid-cols-1    gap-4 ">
                {isLoading ? <div>Loading ...</div> : null}
                {error ? <div>Error</div> : null}
                {teams?.length === 0 ? <div>No teams found</div> : null}

                {teams?.map((team: TeamCardType, index: number, arr: any) => {
                    return <TeamCard ref={arr.length === index + 1 ? lastItem : null} key={index} {...team} />
                })}
            </div>
        </div>
    )
}

export default TeamList
