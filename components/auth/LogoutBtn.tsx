"use client"

import { useRouter } from "next/navigation"
import { useMutation, useQuery } from "@tanstack/react-query"

import { authApi } from "@/lib/api/authApi"

import { Icons } from "../icons"
import { Button } from "../ui/button"

function LogoutBtn() {
  const router = useRouter()
  const { mutate, isPending } = useMutation({
    mutationFn: () => {
      return authApi.logout()
    },
    onSuccess() {
      router.push(`/home`)
    },
  })

  return (
    <Button
      variant="ghost"
      size="dashboardbtn"
      className="px-2 w-full "
      isLoading={isPending}
      onClick={() => mutate()}
    >
      <div className="flex w-full items-center justify-start gap-4 self-end">
        <Icons.logout className="h-8 rounded-sm" />
        <span className="capitalize">Logout</span>
      </div>
    </Button>
  )
}

export default LogoutBtn
