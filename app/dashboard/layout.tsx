import { cookies } from "next/headers"
import { redirect } from "next/navigation"

import { authApi } from "@/lib/api/authApi"
import { SidebarWrapper } from "@/components/side-bar"

import { queryClient } from "../layout"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()
  const token = cookieStore.get("_acc__token")?.value

  if (!token) {
    redirect("/login")
  }

  return (
    <section>
      <div className=" flex h-screen ">
        <SidebarWrapper />
        <div className="w-full md:w-[calc(100vw-196px)] ">{children}</div>
      </div>
    </section>
  )
}
