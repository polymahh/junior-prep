import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import Link from "next/link"

export function SiteHeader() {
    return (
        <header className="w-full border-b  bg-background">
            <div className="container flex h-16 items-center space-x-4 justify-center sm:justify-between sm:space-x-0">
                <Link href="/" className="flex items-center space-x-2">
                    <Icons.logo className="flex h-8 w-44" />
                </Link>
                <div className="hidden sm:flex flex-1 items-center justify-end space-x-4">
                    <nav className=" flex items-center space-x-2 ">
                        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <Icons.gitHub className="h-8 w-8" />
                                <span className="sr-only">GitHub</span>
                            </div>
                        </Link>
                        <Link href={siteConfig.links.discord} target="_blank" rel="noreferrer">
                            <div
                                className={buttonVariants({
                                    size: "icon",
                                    variant: "ghost",
                                })}
                            >
                                <Icons.discord className="h-8 w-8 fill-current" />
                                <span className="sr-only">Discord</span>
                            </div>
                        </Link>
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
