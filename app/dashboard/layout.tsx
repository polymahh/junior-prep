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
        <div className="flex h-screen flex-col border-r p-4">
          <Link href="/" className="flex items-center space-x-2 pb-8">
            <Icons.logo className="flex h-8 w-44" />
          </Link>
          <div className="flex flex-1 flex-col gap-2">
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "dashboardbtn",
                className: "px-2",
              })}
              href={siteConfig.profile.href}
            >
              <div className="flex w-full items-center justify-start gap-4">
                <Icons.profile className="h-8 rounded-sm" />
                <span className="text-lg capitalize">
                  {siteConfig.profile.title}
                </span>
              </div>
            </Link>
            <div className=" flex flex-col gap-4">
              <span className="pl-2 text-muted-foreground">
                {"</> Languages"}
              </span>
              <div className="relative flex flex-col gap-3 pl-8">
                <div className=" absolute -top-2 left-4 h-full border-l border-dashed" />
                {siteConfig.languages.map((link) => {
                  const Icon = Icons[link.title as keyof typeof Icons]

                  return (
                    <Link
                      key={link.title}
                      className={buttonVariants({
                        variant: "ghost",
                        size: "dashboardbtn",
                        className: "px-2",
                      })}
                      href={link.href}
                    >
                      <div className="flex w-full items-center justify-start gap-4">
                        <Icon className="h-8 rounded-sm" />
                        <span className="text-lg capitalize">{link.title}</span>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "dashboardbtn",
                className: "px-2 ",
              })}
              href={siteConfig.settings.href}
            >
              <div className="flex w-full items-center justify-start gap-4">
                <Icons.settings className="h-8 rounded-sm" />
                <span className="text-lg capitalize">
                  {siteConfig.settings.title}
                </span>
              </div>
            </Link>
            <div className=" flex w-full grow items-end">
              <Link
                className={buttonVariants({
                  variant: "ghost",
                  size: "dashboardbtn",
                  className: "px-2 w-full ",
                })}
                href="/"
              >
                <div className="flex w-full items-center justify-start gap-4 self-end">
                  <Icons.logout className="h-8 rounded-sm" />
                  <span className="text-lg capitalize">Logout</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1">{children}</div>
      </div>
    </section>
  )
}
