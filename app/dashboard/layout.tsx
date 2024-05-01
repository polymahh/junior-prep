import { SidebarWrapper } from "@/components/side-bar"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className=" flex h-screen ">
        <SidebarWrapper />
        <div className="w-full md:w-[calc(100vw-196px)] ">{children}</div>
      </div>
    </section>
  )
}
