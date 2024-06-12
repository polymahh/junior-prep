"use client"

import LogoutBtn from "@/components/auth/LogoutBtn"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export function SideBar({ setOpen }: { setOpen?: React.Dispatch<React.SetStateAction<boolean>> }) {
    const pathname = usePathname()
    const router = useRouter()
    const handleClick = (link: string) => {
        router.push(link)
        if (setOpen) {
            setOpen(false)
        }
    }
    return (
        <div className="flex h-screen flex-col bg-background border-r p-4 relative md:fixed top-0">
            <Link href="/" className="flex pt-4 pb-8">
                <Icons.logo className="flex h-8 w-40" />
            </Link>
            <div className="flex flex-1 flex-col gap-2">
                {siteConfig.sidebarNav.map(link => {
                    const Icon = Icons[link.title as keyof typeof Icons]

                    return (
                        <Button
                            key={link.title}
                            variant="ghost"
                            size="dashboardbtn"
                            className={cn(pathname === link.href ? "px-2 bg-accent/80 " : "px-2")}
                            onClick={() => handleClick(link.href)}
                        >
                            <div className="flex w-full items-center justify-start gap-4">
                                <Icon className="h-8 rounded-sm" />
                                <span className=" capitalize">{link.title}</span>
                            </div>
                        </Button>
                    )
                })}
                <div className=" flex flex-col gap-4">
                    <span className="pl-1 text-muted-foreground">{"</> Flash Cards"}</span>
                    <div className="relative flex flex-col gap-3 pl-6">
                        <div className="absolute -top-2 left-4 h-full border-l border-dashed" />
                        {siteConfig.languageNav.map(link => {
                            const Icon = Icons[link.icon as keyof typeof Icons]
                            return (
                                <Button
                                    key={link.title}
                                    variant="ghost"
                                    size="dashboardbtn"
                                    className={cn(pathname === link.href ? "px-2 bg-accent/80 " : "px-2")}
                                    onClick={() => handleClick(link.href)}
                                >
                                    <div className="flex w-full items-center justify-start gap-4">
                                        <Icon className="h-7 rounded-sm" />
                                        <span className="capitalize">{link.title}</span>
                                    </div>
                                </Button>
                            )
                        })}
                    </div>
                </div>

                <div className=" flex w-full flex-col grow justify-end">
                    <LogoutBtn />
                </div>
            </div>
        </div>
    )
}

export function MobileSidebar() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="flex md:hidden left-2 bg-border border z-50 hover:bg-muted">
                <Menu />
            </SheetTrigger>
            <SheetContent side={"left"} className=" p-0 w-fit flex md:hidden ">
                <SideBar setOpen={setOpen} />
            </SheetContent>
        </Sheet>
    )
}
