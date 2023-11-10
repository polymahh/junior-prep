import React from "react"
import Link from "next/link"

import ProfileAvatar from "./ProfileAvatar"
import ProfileProgress from "./ProfileProgress"
import ProfileRole from "./ProfileRole"

function ProfileCard() {
  return (
    <div className="flex justify-between rounded-lg border p-4 h-full items-center">
      <ProfileAvatar />
      <ProfileRole />
      <ProfileProgress />
    </div>
  )
}

export default ProfileCard
