import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { AlarmClock } from "lucide-react"

import { flashcardsApi } from "@/lib/api/flashcardsApi"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [today, setToday] = useState(new Date().toISOString().split("T")[0])

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ["javascript_flashcards"],
    queryFn: async () => {
      const result = await flashcardsApi.getFlashcards("javascript")

      return result?.timeSpent
    },
  })

  useEffect(() => {
    const storage_Time = localStorage.getItem("timeSpent")

    if (storage_Time && data) {
      const previousTime = parseInt(storage_Time[1])
      const previousDate = storage_Time[0]
      if (previousTime && previousDate === today) {
        setTime(data?.time > previousTime ? data?.time : previousTime)
      } else {
        setTime(data?.time)
      }
    }
  }, [])

  useEffect(() => {
    console.log("setting time in localStorage")
    if (isSuccess && data) {
      const time_date = localStorage.getItem("timeSpent")?.split(",")
      const createdAt = data?.createdAt.split("T")[0]
      console.log("🚀 ~ useEffect ~ time_date:", time_date, createdAt)
      if (time_date && time_date[0] === createdAt) {
        if (time_date[1] < data?.time) {
          localStorage.setItem("timeSpent", createdAt + "," + data?.time)
        }
      } else {
        localStorage.setItem("timeSpent", createdAt + "," + data?.time)
      }
    }
  }, [isSuccess])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 1
        localStorage.setItem("timeSpent", today + "," + newTime.toString())
        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex min-w-[96px] gap-2 items-center">
              <AlarmClock className="w-6 h-6" />
              <p>
                {hours < 10 ? "0" + hours : hours}:
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </p>
            </div>
          </TooltipTrigger>

          <TooltipContent>Time spent today!</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  )
}
