import React from "react"

import LoginForm from "@/components/auth/LoginForm"
import { Icons } from "@/components/icons"

function Login() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
      <div className=" flex flex-col items-center">
        <Icons.logo />
        <h2 className="text-muted-foreground">Login to your account</h2>
      </div>
      <LoginForm />
    </div>
  )
}

export default Login
