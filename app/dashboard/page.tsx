import React, { ReactNode } from "react"
import { redirect } from "next/navigation"
import { auth } from "@/firebase/clientApp"
import { useAuthState } from "react-firebase-hooks/auth"

const Dashboard = () => {
  const [user] = useAuthState(auth)

  if (!user) {
    redirect("/login?origin=dashboard")
  }
  return <div>Have a good coding</div>
}
export default Dashboard
