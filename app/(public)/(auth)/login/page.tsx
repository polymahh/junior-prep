import LoginForm from "@/components/auth/LoginForm"
import OAuthButtons from "@/components/auth/OAuthButton"
import { Icons } from "@/components/icons"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import React from "react"

async function Login() {
    const session = await getServerSession()
    if (session && session?.user.name) {
        redirect("/dashboard")
    }
    return (
        <div className="flex h-full flex-col items-center justify-center gap-10 pt-12">
            <div className=" flex flex-col items-center">
                <Icons.logo />
                <h2 className="text-muted-foreground">Login to your account</h2>
            </div>
            <div>
                <OAuthButtons />
                <div className="bg- p-2 rounded-sm text-sm text-muted-foreground my-4 max-w-[300px] text-center">
                    <p>Connect With GitHub for a better experience colaborating and creating projects </p>
                </div>
            </div>
            {/* <LoginForm /> */}
        </div>
    )
}

export default Login
