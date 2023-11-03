import React, { ReactNode } from "react"
import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"

const Dashboard = async () => {
  const session = await getServerSession()
  console.log(session)
  if (!session || !session.user) {
    redirect("/login?origin=dashboard")
  }
  return <div>Have a good coding</div>
}
export default Dashboard
