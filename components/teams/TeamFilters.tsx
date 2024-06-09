import { Button } from "../ui/button"
import { Input } from "../ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Filter, Search, SlidersHorizontal } from "lucide-react"
import React, { useEffect, useState } from "react"

function TeamFilters({
    setStatusSort,
    setDateSort,
    setSearch,
    search,
}: {
    setStatusSort: React.Dispatch<React.SetStateAction<any>>
    setDateSort: React.Dispatch<React.SetStateAction<any>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}) {
    const handleSearch = (e: any) => setSearch(e.target.value)

    const handleFilter = (e: any) => {
        console.log("🚀 ~ handleFilter ~ e:", e)
    }

    return (
        <div className="flex flex-col xl:flex-row  gap-2">
            <div className=" flex gap-4 relative">
                <Input
                    type="text"
                    placeholder="Search ..."
                    value={search}
                    onChange={handleSearch}
                    className="w-[330px] pr-10"
                />
                <Search className="w-5 h-5 mr-2 absolute top-2 right-1 text-border" />
            </div>
            <div className="flex  gap-2 w-full">
                <span className="flex items-center gap-1 text-muted-foreground">
                    <SlidersHorizontal className="w-5 h-5" />
                    Filters:
                </span>
                <Select onValueChange={setDateSort}>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="By Date" className="text-sm" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup className="text-sm">
                            <SelectLabel>By date</SelectLabel>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="desc">New First</SelectItem>
                            <SelectItem value="asc">Old First</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Select onValueChange={setStatusSort}>
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="By Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>By Status</SelectLabel>
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="inprogress">In Progress</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            {/* <Button className="rounded-md" variant={"outline"}>
                    <Filter className="w-5 h-5 mr-2" /> Filter
                </Button> */}
        </div>
    )
}

export default TeamFilters
