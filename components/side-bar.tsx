"use client"

import Link from "next/link"
import {
  BookOpenCheck,
  Layout,
  Menu,
  Sidebar,
  SidebarOpen,
  Users,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import LogoutBtn from "@/components/auth/LogoutBtn"
import { Icons } from "@/components/icons"

export function SidebarWrapper() {
  return (
    <>
      <div className="md:block hidden">
        <SideBar />
      </div>
      <MobileSidebar />
    </>
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

export function SideBar() {
  return (
    <div className="flex h-screen flex-col border-r p-4 sticky top-0">
      <Link href="/" className="flex pt-4 pb-8">
        <Icons.logo className="flex h-8 w-40" />
      </Link>
      <div className="flex flex-1 flex-col gap-2">
        <Link
          className={buttonVariants({
            variant: "ghost",
            size: "dashboardbtn",
            className: "px-2 bg-accent",
          })}
          href={siteConfig.dashboard.href}
        >
          <div className="flex w-full items-center justify-start gap-4">
            <Layout className="h-8 rounded-sm" />
            <span className=" capitalize">{siteConfig.dashboard.title}</span>
          </div>
        </Link>
        <Link
          className={buttonVariants({
            variant: "ghost",
            size: "dashboardbtn",
            className: "px-2 ",
          })}
          href={siteConfig.teams.href}
        >
          <div className="flex w-full items-center justify-start gap-4">
            <Users className="h-8 rounded-sm" />
            <span className="capitalize">{siteConfig.teams.title}</span>
          </div>
        </Link>
        <Link
          className={buttonVariants({
            variant: "ghost",
            size: "dashboardbtn",
            className: "px-2 ",
          })}
          href={siteConfig.courses.href}
        >
          <div className="flex w-full items-center justify-start gap-4">
            <BookOpenCheck className="h-8 rounded-sm" />
            <span className="capitalize">{siteConfig.courses.title}</span>
          </div>
        </Link>
        <div className=" flex flex-col gap-4">
          <span className="pl-2 text-muted-foreground">
            {"</> Flash Cards"}
          </span>
          <div className="relative flex flex-col gap-3 pl-8">
            <div className="absolute -top-2 left-4 h-full border-l border-dashed" />
            {siteConfig.languages.map((link) => {
              const Icon = Icons[link.title as keyof typeof Icons]

              return (
                <Link
                  key={link.title}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "dashboardbtn",
                    className: "px-2",
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
          <Link
            className={buttonVariants({
              variant: "ghost",
              size: "dashboardbtn",
              className: "px-2 ",
            })}
            href={siteConfig.settings.href}
          >
            <div className="flex w-full items-center justify-start gap-4">
              <Icons.settings className="h-8 rounded-sm" />
              <span className="capitalize">{siteConfig.settings.title}</span>
            </div>
          </Link>
          <LogoutBtn />
        </div>
      </div>
    </div>
  )
}
