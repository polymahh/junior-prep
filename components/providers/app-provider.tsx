"use client"

import { authApi } from "@/lib/api/authApi"
import { User } from "@prisma/client"
import { useQuery } from "@tanstack/react-query"
import { createContext, useContext, useEffect, useState } from "react"

interface AppContextType {
    user: User | null
}

const initalState = {
    user: null,
}

const AppContext = createContext<AppContextType>(initalState)
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    const { data } = useQuery({ queryKey: ["user"], queryFn: authApi.getProfile })
    useEffect(() => {
        if (data) {
            setUser(data)
        }
    }, [data])

    const value = {
        user,
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error("useApp must be used within a AppProvider")
    }
    return context
}
