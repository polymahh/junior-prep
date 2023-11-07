"use client"

import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { signIn, useSession } from "next-auth/react"

import { Button } from "../ui/button"

const OAuthButtons = () => {
  const loading = false
  const session = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const origin = searchParams.get("origin")

  // const handleredirect = async () => {
  //   await signIn("google")
  //   if (session.status === "unauthenticated") {
  //     router.push(`/${origin}` ?? "/dashboard")
  //   }
  // }

  // console.log(providers)

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        size="lg"
        variant="secondary"
        className={"h-12 gap-4 py-2"}
        onClick={() => signIn("google")}
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
      {/* {error ? (
        <p className="text-destructive text-sm">{error?.message}</p>
      ) : null} */}
    </div>
  )
}
export default OAuthButtons
