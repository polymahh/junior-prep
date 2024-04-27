import { useEffect, useState } from "react"
import { AlarmClock } from "lucide-react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

export const Timer = () => {
  const [time, setTime] = useState(0)
  const [today, setToday] = useState(new Date().toISOString().slice(0, 10))

  useEffect(() => {
    const previousTime = localStorage.getItem("time")
    if (previousTime && previousTime?.split(",")[0] === today) {
      setTime(parseInt(previousTime.split(",")[1]))
    } else {
      setTime(0)
      localStorage.setItem("time", today + "," + 0)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 1
        localStorage.setItem("time", today + "," + newTime.toString())
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
