"use client"

import { buttonVariants } from "../ui/button"
import TeamCard from "./TeamCard"
import TeamFilters from "./TeamFilters"
import TeamFiltersWrapper from "./TeamFilters"
import useDebounce from "@/hooks/useDebounce"
import useScrollObserver from "@/hooks/useScrollObserver"
import { teamsApi } from "@/lib/api/teamsApi"
import { TeamCardType } from "@/types/global"
import { useInfiniteQuery } from "@tanstack/react-query"
import { ChevronDown, Plus } from "lucide-react"
import Link from "next/link"
import React, { useEffect, useState } from "react"

function TeamList() {
    const [teams, setTeams] = useState<TeamCardType[]>([])
    const [search, setSearch] = useState("")
    const [dateSort, setDateSort] = useState(undefined)
    const [statusSort, setStatusSort] = useState(undefined)
    const limit = "10"
    const debounceValue = useDebounce(search, 9000)

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useInfiniteQuery({
        queryKey: ["teams", { debounceValue, statusSort, dateSort }],
        getNextPageParam: (lastPage: TeamCardType[], pages) => {
            if (lastPage?.length === 0) {
                return null
            }
            return pages?.length
        },
        retry: false,
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
        setTeams((data?.pages as TeamCardType[][])?.flat())
    }, [data])

    return (
        <div className="flex h-full flex-col gap-6 container px-0 sm:px-4 ">
            <div className=" flex justify-between pb-12 items-start gap-4">
                <TeamFiltersWrapper
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
            {isLoading ? <div>Loading ...</div> : null}
            {error ? <div>Error</div> : null}
            {!isLoading && teams?.length === 0 ? <div>No teams found</div> : null}

            {teams?.length > 0 ? (
                <div className="flex flex-col  gap-4 py-4">
                    {teams?.map((team: TeamCardType, index: number, arr: any) => {
                        return <TeamCard ref={arr.length === index + 1 ? lastItem : null} key={index} {...team} />
                    })}
                    <div className="flex flex-col items-center gap-4 py-4">
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">No more Teams</span>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default TeamList
