"use client"

import { Button, buttonVariants } from "../ui/button"
import { authApi } from "@/lib/api/authApi"
import { UseMutateFunction, useMutation } from "@tanstack/react-query"
import { ArrowRight, Loader2, MailCheck } from "lucide-react"
import Link from "next/link"
import React, { useEffect } from "react"

function EmailVerification({ email }: { email: string }) {
    const { mutate, isPending: isVerifying } = useMutation({
        mutationFn: async (email: string) => {
            await authApi.reSendEmail(email)
        },
    })

    const handleResend = () => {
        mutate(email)
    }

    return (
        <div className="flex flex-col gap-4  items-center text-center">
            <div className="rounded-full bg-highlight text-slate-50 p-4">
                {isVerifying ? <Loader2 className="spin" /> : <MailCheck className="h-8 w-8" />}
            </div>
            <h2 className="text-3xl pt-4">Please verify your email</h2>
            <div>
                <span className="text-muted-foreground">You are almost there! We sent an email to </span>
                <p className="text-3xl">{email}</p>
            </div>
            <p className="text-muted-foreground">
                Click on the link to complete the verification process.
                <br />
                You might need to check your spam folder or
                <Button className=" ml-2 p-0" variant="link" onClick={handleResend} disabled={isVerifying}>
                    resend email.
                </Button>
            </p>
            <Link
                className={buttonVariants({
                    variant: "link",
                    size: "link",
                })}
                href={"/login"}
            >
                Go to Login <ArrowRight className={"ml-2  h-4 w-4"} />
            </Link>
        </div>
    )
}

export default EmailVerification
