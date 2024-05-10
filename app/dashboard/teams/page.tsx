import TeamsList from "@/components/teams/TeamsList"
import { Button, buttonVariants } from "@/components/ui/button"
import { Plus, Users } from "lucide-react"
import Link from "next/link"
import React, { useState } from "react"

const teams = async () => {
    return <TeamsList />
}

export default teams
