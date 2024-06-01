import { TimeSpent } from "@prisma/client"
import { AlarmCheck, Layers } from "lucide-react"
import { space } from "postcss/lib/list"
import React, { useEffect, useMemo } from "react"

const MINUTE = 1000 * 60

function ProfileProgress({ sevenDaysActivity }: { sevenDaysActivity: TimeSpent[] }) {
    const todayActivity = useMemo(() => {
        const today = sevenDaysActivity?.find(
            (T: TimeSpent) => String(T?.createdAt).split("T")[0] === new Date().toISOString().split("T")[0],
        )
        const data = {
            minutes: String(Math.floor(((Number(today?.time ?? 0) * 1000) / MINUTE) % 60)).padStart(2, "0") ?? "00",
            cards: today?.totalCards ?? 0,
        }
        return data
    }, [sevenDaysActivity])

    return (
        <div className="flex-1 flex  gap-2 flex-row xs:flex-col  ">
            <div className="flex gap-2 items-center ">
                <div className="bg-sky-500 rounded-sm p-2 flex justify-center items-center ">
                    <Layers className="h-5 w-5 xs:h-8 xs:w-8 text-white" />
                </div>
                <div className="flex flex-col ">
                    <span className=" -mb-1 text-lg">{todayActivity.cards}</span>
                    <span className="text-muted-foreground text-sm">card</span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="bg-yellow-500 rounded-sm p-2 flex justify-center items-center ">
                    <AlarmCheck className="h-5 w-5 xs:h-8 xs:w-8 text-white" />
                </div>
                <div className="flex flex-col  ">
                    <span className=" -mb-1 text-lg whitespace-nowrap">{todayActivity.minutes} min</span>
                    <span className="text-muted-foreground text-sm">time</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileProgress
