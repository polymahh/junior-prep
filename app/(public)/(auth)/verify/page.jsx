import VerificationResult from "@/components/auth/VerificationResult"
import { Icons } from "@/components/icons"
import React from "react"

function Verify() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
            <div className=" flex flex-col items-center">
                <Icons.logo />
                <h2 className="text-muted-foreground">Create Your Account</h2>
            </div>
            <VerificationResult />
        </div>
    )
}

export default Verify
