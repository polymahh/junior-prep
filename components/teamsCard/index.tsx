import React from "react"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"

function TeamsCard() {
  return (
    <div className="border h-full rounded-lg flex flex-col gap-4 p-4">
      <div className="rounded-sm border-b p-1">
        <span className="text-lg font-semibold">Teams:</span>
      </div>
      <div className="bg-secondary p-4 rounded-md grid grid-cols-3">
        <div className="flex flex-col gap-2 ">
          <span>Project repo:</span>
          <Link
            href={siteConfig.links.github}
            className="bg-secondary-foreground text-secondary flex self-start gap-1 justify-center rounded-sm items-center py-1 px-2"
          >
            <Icons.gitHub className="h-5" />
            <span>Junior-prep</span> <ExternalLink className="h-4" />
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-1 items-end">
            By:
            <Link
              className={buttonVariants({
                variant: "link",
                size: "link",
                className: "justify-start",
              })}
              href={"/"}
            >
              <Icons.gitHub className="h-5 mr-1" />
              <span>PolyMad</span>
            </Link>
          </div>
          <div className="flex gap-2">
            <span className="bg-sky-500 rounded-sm  px-2 text-white">
              Frontend
            </span>
            <span className="bg-fuchsia-700 rounded-sm  px-2 text-white">
              Backend
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <span>Roles needed:</span>
          <div className="flex gap-2">
            <span className="bg-sky-500 rounded-sm  px-2 text-white">
              Frontend
            </span>
            <span className="bg-fuchsia-700 rounded-sm  px-2 text-white">
              Backend
            </span>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-md grid grid-cols-2">
        <div className="flex flex-col gap-2 ">
          <span>Project name:</span>
          <Link
            href={siteConfig.links.github}
            className="bg-muted flex self-start gap-1 justify-center rounded-sm items-center py-1 px-2"
          >
            <span>Junior-prep</span> <ExternalLink className="h-5 pt-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <span>Roles needed:</span>
          <div className="flex gap-2">
            <span className="bg-sky-500 rounded-sm  px-2 text-white">
              Frontend
            </span>
            <span className="bg-fuchsia-700 rounded-sm  px-2 text-white">
              Backend
            </span>
          </div>
        </div>
      </div>
      <div className="border p-4 rounded-md grid grid-cols-2">
        <div className="flex flex-col gap-2 ">
          <span>Project name:</span>
          <Link
            href={siteConfig.links.github}
            className="bg-muted flex self-start gap-1 justify-center rounded-sm items-center py-1 px-2"
          >
            <span>Junior-prep</span> <ExternalLink className="h-5 pt-1" />
          </Link>
        </div>
        <div className="flex flex-col gap-2 ">
          <span>Roles needed:</span>
          <div className="flex gap-2">
            <span className="bg-sky-500 rounded-sm  px-2 text-white">
              Frontend
            </span>
            <span className="bg-fuchsia-700 rounded-sm  px-2 text-white">
              Backend
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsCard
