"use client"

import { Layout } from "lucide-react"

import ChartCard from "@/components/chartCard"
import CoursesList from "@/components/coursesList"
import ProfileCard from "@/components/profileCard"
import TeamsCard from "@/components/teams/TeamsList"

const Dashboard = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Layout className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
        <div className="col-span-2 ">
          <ProfileCard />
        </div>
        <div className="row-span-2">
          <ChartCard />
        </div>
        <div className="row-start-2 row-span-4 col-start-2">
          <CoursesList />
        </div>
        <div className="row-start-4 row-span-2 col-start-1">
          <TeamsCard />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
