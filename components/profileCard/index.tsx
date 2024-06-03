"use client"

import ProfileAvatar from "./ProfileAvatar"
import ProfileProgress from "./ProfileProgress"
import { authApi } from "@/lib/api/authApi"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { useQuery } from "@tanstack/react-query"
import React from "react"

function ProfileCard() {
    const { data } = useQuery({
        queryKey: ["seven_days_activity"],
        queryFn: async () => flashcardsApi.getSevenDaysActivity(),
    })

    const { data: profile } = useQuery({
        queryKey: ["profile"],
        queryFn: () => authApi.getProfile(),
    })

    return (
        <div className="flex flex-col xs:flex-row justify-between items-start rounded-lg border p-4 h-full ">
            <ProfileAvatar profile={profile?.user} />
            {/* <ProfileRole /> */}
            <ProfileProgress sevenDaysActivity={data} />
        </div>
    )
}

export default ProfileCard
