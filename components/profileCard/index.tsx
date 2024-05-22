"use client"

import ProfileAvatar from "./ProfileAvatar"
import ProfileProgress from "./ProfileProgress"
import { authApi } from "@/lib/api/authApi"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { useQuery } from "@tanstack/react-query"
import React from "react"

function ProfileCard() {
    const { data } = useQuery({
        queryKey: ["answers_timeSpent"],
        queryFn: () => flashcardsApi.getAnswers(),
    })

    const { data: profile } = useQuery({
        queryKey: ["profile"],
        queryFn: () => authApi.getProfile(),
    })

    console.log("🚀 ~ ProfileCard ~ data:", data, profile)
    return (
        <div className="flex justify-between rounded-lg border p-4 h-full items-center">
            <ProfileAvatar />
            {/* <ProfileRole /> */}
            <ProfileProgress />
        </div>
    )
}

export default ProfileCard
