import React from "react"
import Link from "next/link"
import { ArrowRight, MailCheck } from "lucide-react"

import { Button, buttonVariants } from "../ui/button"

function EmailVerification({ email }: { email?: string | null }) {
  const handleResend = () => {
    console.log("not working")
  }
  return (
    <div className="flex flex-col gap-4  items-center text-center">
      <div className="rounded-full bg-highlight text-slate-50 p-4">
        <MailCheck className="h-8 w-8" />
      </div>
      <h2 className="text-3xl pt-4">Please verify your email</h2>
      <div>
        <span className="text-muted-foreground">
          You are almost there! We sent an email to{" "}
        </span>
        <p className="text-3xl  ">{email}</p>
      </div>
      <p className="text-muted-foreground">
        Click on the link to complete the verification process.
        <br />
        You might need to check your spam folder or
        <Button className=" ml-2 p-0" variant="link" onClick={handleResend}>
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
