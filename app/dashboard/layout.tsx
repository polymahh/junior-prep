import Navbar from "@/components/navbar/Navbar"
import { SideBar } from "@/components/side-bar"

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>
            <div className=" flex min-h-screen relative max-w-screen">
                <div className="md:block hidden relative min-w-[192px]">
                    <SideBar />
                </div>
                <div className="w-full flex  flex-col overflow-hidden">
                    <Navbar />
                    <div className="w-full p-2 md:p-4 grow flex flex-col gap-4">{children}</div>
                </div>
            </div>
        </section>
    )
}
