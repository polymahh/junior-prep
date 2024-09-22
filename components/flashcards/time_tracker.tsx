import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { useQuery } from "@tanstack/react-query"
import { AlarmClock } from "lucide-react"
import { useEffect, useState } from "react"

export const Timer = () => {
    const [time, setTime] = useState(0)
    const [today, setToday] = useState(new Date().toISOString().split("T")[0])

    const { data, isSuccess } = useQuery({
        queryKey: ["javascript_flashcards", "timespent"],
        queryFn: async () => {
            const result = await flashcardsApi.getFlashcards("javascript")
            return result?.timeSpent
        },
    })

    useEffect(() => {
        console.log("🚀 ~ useEffect ~ previousTime:", data)
        const storage_Time = localStorage.getItem("timeSpent")?.split(",")
        const serverDate = data?.updatedAt.split("T")[0]
        if (isSuccess) {
            if (storage_Time && data?.time) {
                const previousTime = parseInt(storage_Time[1])
                const previousDate = storage_Time[0]
                if (parseInt(data?.time) > previousTime) {
                    setTime(serverDate === today ? parseInt(data?.time) : 0)
                } else setTime(previousDate === today ? previousTime : 0)
            }
        } else if (storage_Time) {
            if (storage_Time[0] === today) {
                setTime(parseInt(storage_Time[1]))
            } else {
                setTime(0)
            }
        } else setTime(0)
    }, [isSuccess])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prev => {
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
                                {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:
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
