"use client"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { signOut } from "next-auth/react"

function LogoutBtn() {
    return (
        <Button variant="ghost" size="dashboardbtn" className="px-2 w-full " onClick={() => signOut()}>
            <div className="flex w-full items-center justify-start gap-4 self-end">
                <Icons.logout className="h-8 rounded-sm" />
                <span className="capitalize">Logout</span>
            </div>
        </Button>
    )
}

export default LogoutBtn
