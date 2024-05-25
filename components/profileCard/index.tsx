"use client"

import ProfileAvatar from "./ProfileAvatar"
import ProfileProgress from "./ProfileProgress"
import { authApi } from "@/lib/api/authApi"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"
import React from "react"

function ProfileCard() {
    const { data } = useQuery({
        queryKey: ["answers_timeSpent"],
        queryFn: async () => flashcardsApi.getAnswers(),
    })

    console.log("🚀 ~ ProfileCard ~ data:", data)
    // const result = await flashcardsApi.getAnswers()
    // // const todayDate = new Date().toISOString().split("T")[0]
    // return {
    //     time: result?.sevenDaysActivity?.TimeSpent[0].time,
    //     cards_number: result?.sevenDaysActivity?.UserAnswer.filter(
    //         (answer: any) => answer?.lastReviewed?.split("T")[0] === todayDate,
    //     ).length,
    // }

    const { data: profile } = useQuery({
        queryKey: ["profile"],
        queryFn: () => authApi.getProfile(),
    })

    return (
        <div className="flex justify-between rounded-lg border p-4 h-full items-center">
            <ProfileAvatar profile={profile?.user} />
            {/* <ProfileRole /> */}
            <ProfileProgress sevenDaysActivity={data?.sevenDaysActivity?.TimeSpent} />
        </div>
    )
}

export default ProfileCard
