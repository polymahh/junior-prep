import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Search, SlidersHorizontal } from "lucide-react"
import React from "react"

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
    return (
        <div className="flex flex-col xl:flex-row gap-2">
            <div className=" gap-4  relative">
                <span className="flex md:hidden items-center gap-1 text-muted-foreground mb-2">
                    <Search className="w-5 h-5" />
                    Search:
                </span>
                <Input
                    type="text"
                    placeholder="Search ..."
                    value={search}
                    onChange={handleSearch}
                    className="w-[330px] pr-10"
                />
                <Search className="w-5 h-5 mr-2 absolute top-2 right-1 text-border hidden md:block" />
            </div>
            <div className="flex flex-col md:flex-row gap-2 py-6 md:py-0 w-full">
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
                            <SelectItem value="completed">Completed</SelectItem>
                            <SelectItem value="inprogress">In Progress</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

const TeamFiltersWrapper = ({
    setStatusSort,
    setDateSort,
    setSearch,
    search,
}: {
    setStatusSort: React.Dispatch<React.SetStateAction<any>>
    setDateSort: React.Dispatch<React.SetStateAction<any>>
    setSearch: React.Dispatch<React.SetStateAction<string>>
    search: string
}) => {
    return (
        <>
            <div className="hidden md:block   ">
                <TeamFilters
                    setDateSort={setDateSort}
                    setStatusSort={setStatusSort}
                    setSearch={setSearch}
                    search={search}
                />
            </div>
            <div className="md:hidden ">
                <Sheet>
                    <SheetTrigger>
                        <Button variant="outline" className="rounded-sm gap-1 text-muted-foreground">
                            <SlidersHorizontal /> Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent side={"left"} className=" sm:max-w-[90vw] py-12 ">
                        <TeamFilters
                            setDateSort={setDateSort}
                            setStatusSort={setStatusSort}
                            setSearch={setSearch}
                            search={search}
                        />
                    </SheetContent>
                </Sheet>
            </div>
        </>
    )
}

export default TeamFiltersWrapper
