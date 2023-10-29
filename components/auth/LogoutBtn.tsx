import React from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/firebase/clientApp"
import { useSignOut } from "react-firebase-hooks/auth"

import { Icons } from "../icons"
import { Button } from "../ui/button"

function LogoutBtn() {
  const [signOut, loading, error] = useSignOut(auth)
  const router = useRouter()

  const handleLogout = async () => {
    const success = await signOut()
    if (success) {
      router.push("/home")
    }
  }
  return (
    <Button
      variant="ghost"
      size="dashboardbtn"
      className="px-2 w-full "
      onClick={handleLogout}
      isLoading={true}
    >
      <div className="flex w-full items-center justify-start gap-4 self-end">
        <Icons.logout className="h-8 rounded-sm" />
        <span className="text-lg capitalize">Logout</span>
      </div>
    </Button>
  )
}

export default LogoutBtn
