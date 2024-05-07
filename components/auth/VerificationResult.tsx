"use client"

import { buttonVariants } from "../ui/button"
import { authApi } from "@/lib/api/authApi"
import { useMutation } from "@tanstack/react-query"
import { ArrowRight, CircleAlert, MailCheck, MessageCircleWarning } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useEffect } from "react"

function VerificationResult() {
    const params = useSearchParams()
    const email = params.get("email") as string
    const token = params.get("token") as string
    const { mutate, isError, isSuccess, isPending } = useMutation({
        mutationFn: async () => {
            await authApi.verify({ email, token })
        },
    })

    useEffect(() => {
        mutate()
    }, [])

    if (isPending) {
        return <div>Loading...</div>
    }

    if (isError) {
        return (
            <div className="flex flex-col gap-4 pt-12 items-center text-center">
                <h2 className="text-3xl pt-4">Something went wrong!</h2>
                <div className="rounded-full bg-red-700 text-slate-50 p-4">
                    <MessageCircleWarning className="h-8 w-8" />
                </div>
                <div>
                    <span className="text-muted-foreground">Link expired or invalid. </span>
                </div>
                <p className="text-muted-foreground">Please use the link below to login .</p>
                <Link
                    className={buttonVariants({
                        variant: "link",
                        size: "link",
                    })}
                    href={"/login"}
                >
                    Login
                </Link>
            </div>
        )
    }

    if (isSuccess) {
        return (
            <div className="flex flex-col gap-4 pt-12 items-center text-center">
                <h2 className="text-3xl pt-4">Email Verified!</h2>
                <div className="rounded-full bg-highlight text-slate-50 p-4">
                    <MailCheck className="h-8 w-8" />
                </div>
                <div>
                    <p className="text-3xl ">{email}</p>
                    <span className="text-muted-foreground">Thank you, your email has been verified. </span>
                </div>
                <p className="text-muted-foreground">Please use the link below to login.</p>
                <Link
                    className={buttonVariants({
                        variant: "link",
                        size: "link",
                    })}
                    href={"/login"}
                >
                    Login <ArrowRight className={"ml-2  h-4 w-4"} />
                </Link>
            </div>
        )
    }
}

export default VerificationResult
