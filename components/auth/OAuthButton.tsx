"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { auth } from "@/firebase/clientApp"
import { useSignInWithGoogle } from "react-firebase-hooks/auth"

import { Button, buttonVariants } from "../ui/button"

const OAuthButtons = () => {
  const [signInWithGoogle, _, loading, error] = useSignInWithGoogle(auth)

  const router = useRouter()
  const searchParams = useSearchParams()
  const origin = searchParams.get("origin")

  const handleredirect = async () => {
    const user = await signInWithGoogle()
    if (user) {
      router.push(origin ? `/${origin}` : "/dashboard")
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        size="lg"
        variant="secondary"
        className={"h-12 gap-4 py-2"}
        onClick={handleredirect}
        isLoading={loading}
      >
        {loading ? null : (
          <Image
            src={"/images/googlelogo.png"}
            height={24}
            width={24}
            alt="Log in with Google"
          />
        )}
        <span>Continue with Google</span>
      </Button>
      {error ? (
        <p className="text-destructive text-sm">{error.message}</p>
      ) : null}
    </div>
  )
}
export default OAuthButtons
