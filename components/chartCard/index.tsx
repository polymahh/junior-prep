"use client"

import React, { PureComponent } from "react"
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

function ChartCard() {
    const data = [
        {
            name: "Mon",
            Cards: 22,
            Time: 22,
        },
        {
            name: "Tue",
            Cards: 12,
            Time: 22,
        },
        {
            name: "Wed",
            Cards: 39,
            Time: 22,
        },
        {
            name: "Thu",
            Cards: 57,
            Time: 22,
        },
        {
            name: "Fri",
            Cards: 44,
            Time: 22,
        },
        {
            name: "Sat",
            Cards: 22,
            Time: 22,
        },
        {
            name: "San",
            Cards: 20,
            Time: 22,
        },
    ]

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

    return (
        <div className="h-full flex flex-col border rounded-lg p-4">
            <h2 className="text-lg font-semibold">7 Days Summary:</h2>
            <span className="text-muted-foreground text-sm">Cards reviewed in the last 7 days</span>
            <div className="h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
                        <Bar dataKey="Cards" fill="#0ea5e9" />
                        <Bar dataKey="Time" fill="#eab308" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ChartCard
