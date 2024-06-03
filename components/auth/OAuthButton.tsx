"use client"

import { Button } from "../ui/button"
import Image from "next/image"

const OAuthButtons = () => {
    const loading = false

    return (
        <div className="flex flex-col items-center gap-2">
            <Button
                size="lg"
                variant="secondary"
                className={"h-12 gap-4 py-2"}
                // onClick={() => signIn("github")}
                isLoading={loading}
            >
                {loading ? null : (
                    <Image src={"/images/googlelogo.png"} height={24} width={24} alt="Log in with Google" />
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
