import React from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { siteConfig } from "@/config/site"

function ProfileRole() {
  return (
    <div className="flex flex-col gap-1">
      <span className=" text-muted-foreground text-sm">Project:</span>
      <Link
        href={siteConfig.links.github}
        className="bg-secondary flex gap-1 justify-center rounded-sm items-center p-1"
      >
        <span>Junior-prep</span> <ExternalLink className="h-5 pt-1" />
      </Link>
      <span className="pt-2 text-muted-foreground text-sm">Roles:</span>
      <div className="flex gap-2">
        <span className="bg-sky-500 rounded-sm  px-2">Frontend</span>
        <span className="bg-fuchsia-700 rounded-sm  px-2">Backend</span>
      </div>
    </div>
  )
}

export default ProfileRole
