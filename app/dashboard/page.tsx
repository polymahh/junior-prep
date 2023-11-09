"use client"

import { Layout } from "lucide-react"

import ChartCard from "@/components/chartCard"
import ProfileCard from "@/components/profileCard"

const Dashboard = async () => {
  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Layout className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <ProfileCard />
        </div>
        <ChartCard />
      </div>
    </div>
  )
}
export default Dashboard
