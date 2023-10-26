import React from "react"

import SignupForm from "@/components/auth/SignupForm"
import { Icons } from "@/components/icons"

function Register() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
      <div className=" flex flex-col items-center">
        <Icons.logo />
        <h2 className="text-muted-foreground">Create Your Account</h2>
      </div>
      <SignupForm />
    </div>
  )
}

export default Register
