"use client"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { signIn, useSession } from "next-auth/react"
import { useState } from "react"

const OAuthButtons = () => {
    const [loading, setLoading] = useState(false)
    const session = useSession()
    const handleSubmit = async () => {
        setLoading(true)
        const data = await signIn("github", {
            callbackUrl: "/dashboard",
        })
        if (data?.ok && session.status !== "unauthenticated") {
            setLoading(false)
        }

        if (data?.error) {
            console.log("🚀 ~ handleSubmit ~ data?.error:", data?.error)
            setLoading(false)
            toast({
                title: "Something went Wrong!",
                description: data.error,
                variant: "destructive",
            })
        }
    }

    return (
        <div className="flex flex-col items-center gap-2">
            <Button
                type="button"
                size="lg"
                variant="secondary"
                className={"h-12 px-4 flex gap-6 py-2 text-lg"}
                onClick={handleSubmit}
                isLoading={loading}
            >
                {loading ? null : <Icons.gitHub className="h-8 w-8" />}
                <span>Continue with GitHub</span>
            </Button>
        </div>
    )
}
export default OAuthButtons
