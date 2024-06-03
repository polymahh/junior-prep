import { siteConfig } from "@/config/site"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import React from "react"

function ProfileRole() {
    return (
        <div className="flex flex-col grow gap-1">
            <span className=" text-muted-foreground text-sm">Project:</span>
            <Link
                href={siteConfig.links.github}
                className="bg-secondary flex self-start gap-1 justify-center rounded-sm items-center p-1"
            >
                <span>Junior-prep</span> <ExternalLink className="h-5 pt-1" />
            </Link>
            <span className="pt-2 text-muted-foreground text-sm">Roles:</span>
            <div className="flex gap-2">
                <span className="bg-sky-500 rounded-sm  px-2 text-white">Frontend</span>
                <span className="bg-fuchsia-700 rounded-sm  px-2 text-white">Backend</span>
            </div>
        </div>
    )
}

export default ProfileRole
