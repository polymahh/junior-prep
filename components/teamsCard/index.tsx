"use client"

import React from "react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { ChevronRight, ExternalLink, Ghost } from "lucide-react"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { Button, buttonVariants } from "../ui/button"

function TeamsCard() {
  return (
    <div className="border h-full rounded-lg flex flex-col gap-6 p-4">
      <div className=" border-b pb-1 flex justify-between">
        <span className="text-lg font-semibold">Teams:</span>
        <Link
          className={buttonVariants({
            variant: "link",
            size: "link",
            className: "justify-start",
          })}
          href={"/"}
        >
          <span>See More</span>
          <ExternalLink className="h-4" />
        </Link>
      </div>

      <div className="bg-secondary p-4 rounded-md grid grid-cols-3 ">
        <div className="flex  gap-4">
          <Avatar className="h-16 w-16 rounded-sm overflow-hidden">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-4xl">PM</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex gap-1 items-end mb-3">
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
                <span>Ekb</span>
              </Link>
            </div>
            <div className="flex gap-2">
              <span className="bg-red-500 rounded-sm px-2 text-white">
                Design
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-sm text-muted-foreground">Project repo:</span>
          <Link
            href={siteConfig.links.github}
            className="bg-secondary-foreground text-secondary flex self-start gap-1 justify-center rounded-sm items-center py-1 px-2"
          >
            <Icons.gitHub className="h-5" />
            <span>Roomates-tinder</span> <ExternalLink className="h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-2 ">
          <span className="text-sm text-muted-foreground">Roles needed:</span>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-sky-500 rounded-sm  px-2 text-white">
              Frontend
            </span>
            <span className="bg-fuchsia-700 rounded-sm  px-2 text-white">
              Backend
            </span>
            <span className="bg-yellow-500 rounded-sm  px-2 text-white">
              Senior
            </span>
          </div>
        </div>
      </div>

      {/* ============ */}

      <div className="bg-secondary p-4 rounded-md grid grid-cols-3">
        <div className="flex  gap-4">
          <Avatar className="h-16 w-16 rounded-sm overflow-hidden">
            <AvatarImage src="/images/stormix.jpg" alt="@shadcn" />
            <AvatarFallback className="text-4xl">PM</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex gap-1 items-end mb-3">
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
                <span>Stormix</span>
              </Link>
            </div>
            <div className="flex gap-2">
              <span className="bg-yellow-500 rounded-sm px-2 text-white">
                Senior
              </span>
              <span className="bg-fuchsia-700 rounded-sm px-2 text-white">
                Backend
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-sm text-muted-foreground">Project repo:</span>
          <Link
            href={siteConfig.links.github}
            className="bg-secondary-foreground text-secondary flex self-start gap-1 justify-center rounded-sm items-center py-1 px-2"
          >
            <Icons.gitHub className="h-5" />
            <span>Omegle-clone</span> <ExternalLink className="h-4" />
          </Link>
        </div>
        <div className="flex gap-2 items-center ">
          <div className="flex flex-col gap-2 flex-1 ">
            <span className="text-sm text-muted-foreground">Roles needed:</span>
            <div className="flex gap-2 flex-wrap">
              <span className="bg-sky-500 rounded-sm  px-2 text-white">
                Frontend
              </span>
              <span className="bg-red-500 rounded-sm  px-2 text-white">
                Design
              </span>
            </div>
          </div>
          <Link
            href="/team.id"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "rounded-full",
            })}
          >
            view Team
            <ChevronRight className="ml-1" />
          </Link>
        </div>
      </div>

      {/* ============ */}

      <div className="bg-secondary p-4 rounded-md grid grid-cols-3">
        <div className="flex  gap-4">
          <Avatar className="h-16 w-16 rounded-sm overflow-hidden">
            <AvatarImage src="/images/polymad.jpg" alt="@shadcn" />
            <AvatarFallback className="text-4xl">PM</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex gap-1 items-end mb-3">
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
              <span className="bg-sky-500 rounded-sm px-2 text-white">
                Frontend
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 ">
          <span className="text-sm text-muted-foreground">Project repo:</span>
          <Link
            href={siteConfig.links.github}
            className="bg-secondary-foreground text-secondary flex self-start gap-1 justify-center rounded-sm items-center py-1 px-2"
          >
            <Icons.gitHub className="h-5" />
            <span>Junior-Prep</span> <ExternalLink className="h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-2 ">
          <span className="text-sm text-muted-foreground">Roles needed:</span>
          <div className="flex gap-2 flex-wrap">
            <span className="bg-red-500 rounded-sm  px-2 text-white">
              Design
            </span>
            <span className="bg-fuchsia-700 rounded-sm px-2 text-white">
              Backend
            </span>
            <span className="bg-yellow-500 rounded-sm  px-2 text-white">
              Senior
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamsCard
