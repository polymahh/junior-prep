import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className=" flex flex-1  ">
        <div className="h-screen border-r p-4">
          <Link href="/" className="flex items-center space-x-2 pb-10">
            <Icons.logo className="flex h-8 w-44" />
          </Link>
          <div className="flex flex-col gap-2">
            {siteConfig.dashboard.map((link) => {
              const Icon = Icons[link.title as keyof typeof Icons]

              return (
                <Link
                  key={link.title}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "lg",
                    className: "px-2",
                  })}
                  href={link.href}
                >
                  <div className="flex w-full gap-4 items-center justify-start">
                    <Icon className="h-8 h-8 rounded-sm" />
                    <span className="text-lg capitalize">{link.title}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  )
}
