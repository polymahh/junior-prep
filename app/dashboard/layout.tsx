import { MobileSidebar, SideBar } from "@/components/side-bar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div className=" flex h-screen ">
                <div className="md:block hidden relative min-w-[194px]">
                    <SideBar />
                </div>
                <MobileSidebar />
                <div className="w-full ">{children}</div>
            </div>
        </section>
    )
}
