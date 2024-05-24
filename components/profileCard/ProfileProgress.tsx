import { AlarmCheck, Layers } from "lucide-react"
import React from "react"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

function ProfileProgress({ time, cards }: { time: string; cards: number }) {
    const formatedTime = {
        hours: String(Math.floor(((Number(time) * 1000) / HOUR) % 24)).padStart(2, "0"),
        minutes: String(Math.floor(((Number(time) * 1000) / MINUTE) % 60)).padStart(2, "0"),
        seconds: String(Math.floor(((Number(time) * 1000) / SECOND) % 60)).padStart(2, "0"),
    }
    console.log("🚀 ~ ProfileProgress ~ formatedTime:", formatedTime)

    return (
        <div className="flex flex-col flex-1  ">
            <span className=" text-muted-foreground text-sm">Today:</span>

            <div className="flex gap-2 items-center mb-2">
                <div className="bg-sky-500 rounded-sm h-12 w-12 flex justify-center items-center ">
                    <Layers className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col ">
                    <span className=" -mb-1 text-lg">{cards}</span>
                    <span className="text-muted-foreground text-sm">card</span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="bg-yellow-500 rounded-sm h-12 w-12 flex justify-center items-center ">
                    <AlarmCheck className="h-8 w-8 text-white" />
                </div>
                <div className="flex flex-col ">
                    <span className=" -mb-1 text-lg">
                        {formatedTime.hours}:{formatedTime.minutes}:{formatedTime.seconds}s
                    </span>
                    <span className="text-muted-foreground text-sm">time</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileProgress
