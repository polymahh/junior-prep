import { authApi } from "@/lib/api/authApi"
import { SidebarWrapper } from "@/components/side-bar"

import { queryClient } from "../layout"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const data = await queryClient.prefetchQuery({
  //   queryKey: ["profile"],
  //   queryFn: async () => await authApi.getProfile(),
  // })
  // console.log("🚀 ~ data:", data)

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
      <div className=" flex h-screen ">
        <SidebarWrapper />
        <div className="w-full md:w-[calc(100vw-196px)] ">{children}</div>
      </div>
    </section>
  )
}
