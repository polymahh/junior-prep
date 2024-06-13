import { Icons } from "../icons"
import { Switch } from "../ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, User } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes"
import Link from "next/link"

function ProfileDropdown() {
    const { data } = useSession()
    const { setTheme, theme } = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={data?.user?.image ?? ""} alt="@shadcn" />
                        <AvatarFallback className="uppercase">{data?.user.username?.[0] || "JP"}</AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount style={{ marginTop: "4px" }}>
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{data?.user?.username}</p>
                        <p className="text-xs leading-none text-muted-foreground">{data?.user?.email}</p>
                    </div>
                </DropdownMenuLabel>
                {/* <DropdownMenuSeparator /> */}
                <div className="flex items-center justify-end gap-1 py-2">
                    <Switch
                        checked={theme === "dark"}
                        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
                    />
                    {theme === "dark" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                </div>
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
                    <Button
                        onClick={() => signOut()}
                        variant={"ghost"}
                        className="flex h-auto py-0.5 justify-start items-center gap-2 w-full px-2 rounded-md cursor-pointer "
                    >
                        <Icons.logout />
                        <span>Logout</span>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ProfileDropdown
