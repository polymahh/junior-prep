import ResetPassword from "@/components/auth/ResetPassword"
import React from "react"

function ForgotPassword() {
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
            <ResetPassword />
        </div>
    )
}

export default ForgotPassword
