"use client"

import ChartCard from "../chartCard"
import { Icons } from "../icons"
import { Button } from "../ui/button"
import { toast } from "../ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronUp } from "lucide-react"
import { signIn, useSession } from "next-auth/react"
import React, { useState } from "react"

function ProfilePage() {
    const { data, status } = useSession()
    const [loading, setLoading] = useState(false)
    const handleSubmit = async () => {
        setLoading(true)
        const data = await signIn("github", {
            callbackUrl: "/dashboard",
        })
        if (data?.ok && status !== "unauthenticated") {
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
        <div className="container max-w-[600px] mx-auto flex flex-col space-y-6">
            <div className="flex flex-col gap-6  rounded-lg border p-4 h-full ">
                <div className="flex items-center gap-4 grow">
                    <Avatar className="h-16 w-16 md:h-28 md:w-28">
                        <AvatarImage src={data?.user?.image ?? ""} alt="profile image" />
                        <AvatarFallback className="text-2xl md:text-4xl uppercase">
                            {data?.user?.username?.[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-lg md:text-2xl">{data?.user?.username}</h2>
                    </div>
                </div>
                {data?.user.name ? (
                    <div className="flex flex-col ">
                        <div className="flex gap-2 text-xs text-easy items-center mb-4 ">
                            <Icons.gitHub className="h-4 w-4" /> Githun Connected
                        </div>
                        <span className="text-muted-foreground text-sm">Name</span>
                        <span>{data?.user.name}</span>
                        <span className="text-muted-foreground text-sm">Email</span>
                        <span>{data?.user.email}</span>
                    </div>
                ) : (
                    <div className="mx-auto">
                        <Button
                            type="button"
                            size="lg"
                            variant="secondary"
                            className={"h-12 px-4 flex gap-2 py-2 "}
                            onClick={handleSubmit}
                            isLoading={loading}
                        >
                            {false ? null : <Icons.gitHub className="h-6 w-6" />}
                            <span>Connect GitHub profile</span>
                        </Button>
                        <div className="bg-destructive/50 p-2 rounded-sm text-xs max-w-[218px] my-4">
                            <ChevronUp className="mx-auto w-4 h-4 text-muted-foreground " />
                            <p>Connect your GitHub profile to have full access to: Teams </p>
                            <p className="text-muted-foreground ">creating and commenting in teams </p>
                        </div>
                    </div>
                )}

                <div></div>
            </div>
            <div className="min-h-[300px]">
                <ChartCard />
            </div>
        </div>
    )
}

export default ProfilePage
