"use client"

import ProfileAvatar from "./ProfileAvatar"
import ProfileProgress from "./ProfileProgress"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { useQuery } from "@tanstack/react-query"
import React from "react"

function ProfileCard() {
    const { data } = useQuery({
        queryKey: ["seven_days_activity"],
        queryFn: async () => flashcardsApi.getSevenDaysActivity(),
    })

    return (
        <div className="flex flex-col xs:flex-row justify-between items-start rounded-lg border p-4 h-full ">
            <ProfileAvatar />
            {/* <ProfileRole /> */}
            <ProfileProgress sevenDaysActivity={data} />
        </div>
    )
}

export default ProfileCard
