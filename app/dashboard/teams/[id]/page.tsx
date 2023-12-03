import React from "react"
import { Users } from "lucide-react"

import ChartCard from "@/components/chartCard"
import Comments from "@/components/comments"
import CoursesList from "@/components/coursesList"
import CreatorCard from "@/components/creatorCard"
import ProjectDescription from "@/components/projectDescription"
import Roles from "@/components/roles"

const page = () => {
  return (
    <div className="container m-auto flex flex-col gap-4 py-4">
      <div className="flex h-12 w-full items-center justify-start gap-2 rounded-md bg-secondary px-4 ">
        <Users className=" h-10 rounded-sm" />
        <h1 className="text-lg font-semibold">team name</h1>
      </div>
      <div className="grid grid-cols-[auto_300px] grid-rows-[160px] auto-rows-fr gap-4">
        <div className="col-span-2 ">
          <CreatorCard />
        </div>
        <div className="col-span-2 ">
          <ProjectDescription />
        </div>
        <Comments />
        <Roles />
      </div>
    </div>
  )
}

export default page
