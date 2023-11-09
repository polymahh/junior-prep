import React from "react"
import Link from "next/link"

import ProfileAvatar from "./ProfileAvatar"
import ProfileProgress from "./ProfileProgress"
import ProfileRole from "./ProfileRole"

function ProfileCard() {
  return (
    <div className=" h-40 w-full flex justify-around rounded-lg border p-4">
      <ProfileAvatar />
      <ProfileRole />
      <ProfileProgress />
    </div>
  )
}

export default ProfileCard
