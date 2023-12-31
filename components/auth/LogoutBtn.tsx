"use client"

import { useEffect } from "react"
import { signOut, useSession } from "next-auth/react"

import { Icons } from "../icons"
import { Button } from "../ui/button"

function LogoutBtn() {
  const session = useSession()

  useEffect(() => {
    console.log(session)
  })

  return (
    <Button
      variant="ghost"
      size="dashboardbtn"
      className="px-2 w-full "
      onClick={() => signOut()}
      // isLoading={true}
    >
      <div className="flex w-full items-center justify-start gap-4 self-end">
        <Icons.logout className="h-8 rounded-sm" />
        <span className="text-lg capitalize">Logout</span>
      </div>
    </Button>
  )
}

export default LogoutBtn
