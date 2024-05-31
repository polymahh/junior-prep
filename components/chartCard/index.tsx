"use client"

import { flashcardsApi } from "@/lib/api/flashcardsApi"
import { TimeSpent } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import React, { PureComponent, useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function ChartCard() {
    const [days, setDays] = useState<{ name: string; totalCards: number; time: string }[]>([])

    const { data, isSuccess } = useQuery<TimeSpent[]>({
        queryKey: ["seven_days_activity"],
        queryFn: async () => flashcardsApi.getSevenDaysActivity(),
    })

    useEffect(() => {
        const sevenDays = []
        const today = new Date()
        if (isSuccess) {
            for (let i = 0; i < 7; i++) {
                const day = new Date(today)
                const name = new Date(day.setDate(today.getDate() - i)).toISOString().split("T")[0]
                const val = data?.find(d => d.createdAt.toString().split("T")[0] === name)
                if (val) {
                    sevenDays.unshift({
                        name: name.split("-").slice(1).reverse().join("/"),
                        totalCards: val.totalCards,
                        time: (Number(val.time) / 60).toFixed(1),
                    })
                } else {
                    sevenDays.unshift({
                        name: name.split("-").slice(1).reverse().join("/"),
                        totalCards: 0,
                        time: "0",
                    })
                }
            }
            setDays(sevenDays)
        }
    }, [isSuccess])

    return (
        <div className="h-full  max-h-[450px] flex flex-col border rounded-lg p-4 ">
            <h2 className="text-lg font-semibold">7 Days Summary:</h2>
            <span className="text-muted-foreground text-sm">Cards reviewed in the last 7 days</span>
            <div className="h-fit grow ">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={days}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" className="text-sm" />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                        <Bar dataKey="totalCards" fill="#0ea5e9" />
                        <Bar dataKey="time" fill="#eab308" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-muted p-2 rounded-sm">
                <p className="text-muted-foreground text-sm">{`${label}`}</p>
                <div>
                    {payload.map((pld: any) => (
                        <div className="flex gap-1" key={pld.dataKey}>
                            <span className="text-sm">{`${pld.dataKey}:`}</span>
                            <span className="text-sm" style={{ color: pld.fill }}>
                                {pld.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return null
}

export default ChartCard
