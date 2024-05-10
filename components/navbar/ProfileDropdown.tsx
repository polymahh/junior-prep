import { Icons } from "../icons"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { authApi } from "@/lib/api/authApi"
import { useQuery } from "@tanstack/react-query"
import { User } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

function ProfileDropdown() {
    const { data } = useQuery({
        queryKey: ["profile"],
        queryFn: () => {
            return authApi.getProfile()
        },
    })

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                        <AvatarFallback>{data?.user.username?.[0] || "JP"}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount style={{ marginTop: "4px" }}>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{data?.user.username}</p>
                        <p className="text-xs leading-none text-muted-foreground">{data?.user.email}</p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        href={"/dashboard/profile"}
                        className="flex items-center gap-2 w-full px-2 rounded-md cursor-pointer "
                    >
                        <User />
                        <span>Profile</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        href={"/dashboard/profile"}
                        className="flex items-center gap-2 w-full px-2 rounded-md cursor-pointer "
                    >
                        <Icons.logout />
                        <span>Logout</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown
