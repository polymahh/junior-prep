import { cookies } from "next/headers"
import Link from "next/link"
import { redirect } from "next/navigation"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"
import { jwtVerify } from "jose"
import { BookOpenCheck, Layout, Users } from "lucide-react"

import { Token } from "@/types/token"
import { siteConfig } from "@/config/site"
import { authApi } from "@/lib/api/authApi"
import { axios } from "@/lib/axios"
import { getItems } from "@/lib/resquest"
import { buttonVariants } from "@/components/ui/button"
import LogoutBtn from "@/components/auth/LogoutBtn"
import { Icons } from "@/components/icons"
import { AppProvider } from "@/components/providers/app-provider"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  // await queryClient.prefetchQuery({
  //   queryKey: ["isAuthenticated"],
  //   queryFn: () => authApi.refreshToken(),
  // })

  // await queryClient.prefetchQuery({
  //   queryKey: ["teams"],
  //   queryFn: () => getItems(`${process.env.NEXT_PUBLIC_API_URL}/api/teams`),
  // })

  // const cookieStore = cookies()
  // const token = cookieStore.get("_acc__token")?.value

  // if (!token) {
  //   redirect("/login")
  // }

  // // verify the token
  // const { payload }: { payload: Token } = await jwtVerify(
  //   token,
  //   new TextEncoder().encode(process.env.JWT_REFRESH_SECRET)
  // )
  // // if the token is not valid
  // if (!payload) {
  //   redirect("/login")
  // }

  // const response = await axios.post("api/auth/refresh")

  // const isAuthenticated = async () => {
  //   const response = await axios.post("http://127.0.0.1:3000/api/auth/refresh")
  //   return response
  // }

  // const data = await isAuthenticated()

  // const res = await fetch("http://127.0.0.1:3000/api/auth/refresh", {
  //   next: {
  //     revalidate: 1,
  //   },
  // })

  return (
    <section>
      <div className=" flex flex-1">
        <div className="flex h-screen flex-col border-r p-4 sticky top-0">
          <Link href="/" className="flex items-center space-x-2 pt-4 pb-8">
            <Icons.logo className="flex h-8 w-44" />
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
                <span className="text-lg capitalize">
                  {siteConfig.dashboard.title}
                </span>
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
                <span className="text-lg capitalize">
                  {siteConfig.teams.title}
                </span>
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
                <span className="text-lg capitalize">
                  {siteConfig.courses.title}
                </span>
              </div>
            </Link>
            <div className=" flex flex-col gap-4">
              <span className="pl-2 text-muted-foreground">
                {"</> Flash Cards"}
              </span>
              <div className="relative flex flex-col gap-3 pl-8">
                <div className=" absolute -top-2 left-4 h-full border-l border-dashed" />
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
                        <span className="text-lg capitalize">{link.title}</span>
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
                  <span className="text-lg capitalize">
                    {siteConfig.settings.title}
                  </span>
                </div>
              </Link>
              <LogoutBtn />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <HydrationBoundary state={dehydrate(queryClient)}>
            {children}
          </HydrationBoundary>
        </div>
      </div>
    </section>
  )
}
