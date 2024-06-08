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
import { Search } from "lucide-react"
import React, { useEffect, useState } from "react"

function TeamFilters({
    setStatusSort,
    setDateSort,
    setSearch,
    search,
}: {
    setStatusSort: React.Dispatch<React.SetStateAction<string>>
    setDateSort: React.Dispatch<React.SetStateAction<string>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}) {
    const handleSearch = (e: any) => setSearch(e.target.value)

    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
                <Input type="text" placeholder="Search ..." value={search} onChange={handleSearch} className="flex-1" />
                <div className="flex items-center gap-2">
                    <Select onValueChange={setDateSort}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by Date" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>By date</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="des">New First</SelectItem>
                                <SelectItem value="asc">Old First</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center gap-2">
                    <Select onValueChange={setStatusSort}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel className="border-b">By Status</SelectLabel>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="des">Completed</SelectItem>
                                <SelectItem value="asc">In Progress</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <Button className="rounded-md">
                    <Search className="w-6 h-6 mr-2" /> Apply
                </Button>
            </div>
        </div>
    )
}

export default TeamFilters
