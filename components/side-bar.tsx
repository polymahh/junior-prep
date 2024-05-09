"use client"

import LogoutBtn from "@/components/auth/LogoutBtn"
import { Icons } from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { siteConfig } from "@/config/site"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function SideBar() {
    const pathname = usePathname()
    console.log("🚀 ~ SideBar ~ pathname:", pathname)
    return (
        <div className="flex h-screen flex-col border-r p-4 fixed top-0">
            <Link href="/" className="flex pt-4 pb-8">
                <Icons.logo className="flex h-8 w-40" />
            </Link>
            <div className="flex flex-1 flex-col gap-2">
                {siteConfig.sidebarNav.map(link => {
                    const Icon = Icons[link.title as keyof typeof Icons]

                    return (
                        <Link
                            className={buttonVariants({
                                variant: "ghost",
                                size: "dashboardbtn",
                                className: pathname === link.href ? "px-2 bg-accent" : "px-2",
                            })}
                            href={link.href}
                        >
                            <div className="flex w-full items-center justify-start gap-4">
                                <Icon className="h-8 rounded-sm" />
                                <span className=" capitalize">{link.title}</span>
                            </div>
                        </Link>
                    )
                })}
                <div className=" flex flex-col gap-4">
                    <span className="pl-2 text-muted-foreground">{"</> Flash Cards"}</span>
                    <div className="relative flex flex-col gap-3 pl-8">
                        <div className="absolute -top-2 left-4 h-full border-l border-dashed" />
                        {siteConfig.languageNav.map(link => {
                            const Icon = Icons[link.title as keyof typeof Icons]

                            return (
                                <Link
                                    key={link.title}
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "dashboardbtn",
                                        className: pathname === link.href ? "px-2 bg-accent" : "px-2",
                                    })}
                                    href={link.href}
                                >
                                    <div className="flex w-full items-center justify-start gap-4">
                                        <Icon className="h-7 rounded-sm" />
                                        <span className="capitalize">{link.title}</span>
                                    </div>
                                </Link>
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
    return (
        <Sheet>
            <SheetTrigger className="flex md:hidden absolute top-4 left-2 bg-background border rounded-sm">
                <Menu />
            </SheetTrigger>
            <SheetContent side={"left"} className=" p-0 w-fit flex md:hidden ">
                <SideBar />
            </SheetContent>
        </Sheet>
    )
}
