"use client"

import { Button, buttonVariants } from "../ui/button"
import { authApi } from "@/lib/api/authApi"
import { UseMutateFunction, useMutation } from "@tanstack/react-query"
import { ArrowRight, Loader2, MailCheck, PartyPopper } from "lucide-react"
import Link from "next/link"
import React, { useEffect } from "react"

function WelcomeNote({ username }: { username: string }) {
    return (
        <div className="flex flex-col gap-4  items-center text-center">
            <div className="rounded-full bg-highlight text-slate-50 p-4">
                <PartyPopper className="h-8 w-8" />
            </div>
            <h2 className="text-3xl pt-4">Welcome to Junior-Prep</h2>
            <div>
                <span className="text-muted-foreground">You are almost there! </span>
                <p className="text-3xl">{username}</p>
            </div>
            <p className="text-muted-foreground">Click on the link below to complete the Login process.</p>
            <Link
                className={buttonVariants({
                    variant: "link",
                    size: "link",
                })}
                href={"/login?callbackUrl=dashboard/profile"}
            >
                Go to Login <ArrowRight className={"ml-2  h-4 w-4"} />
            </Link>
        </div>
    )
}

export default WelcomeNote
