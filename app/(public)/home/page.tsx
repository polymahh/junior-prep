import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export default function Home() {
  return (
    <section className="container relative grid items-center justify-center gap-12 pt-10 pb-8 md:py-16">
      <div className="absolute w-full h-screen bg-gradient-linear top-32 -z-10"></div>
      <div className="flex max-w-[980px] flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl">
          Ace Your Interviews with{" "}
          <span className="relative whitespace-nowrap">
            Junior-Prep.
            <Icons.line className="absolute w-4/5 -bottom-1 left-4" />
          </span>
        </h1>

        <p className=" max-w-[700px]  text-lg">
          Boost Confidence with The Ultimate Interview Preparation Resource
          Empowering Juniors to Excel.
        </p>
      </div>
      <div className="relative flex justify-center">
        <Link
          href={siteConfig.links.login}
          rel="noreferrer"
          className={buttonVariants({
            variant: "hero",
            size: "hero",
            className: "shadow-md shadow-fuchsia-700 font-semibold",
          })}
        >
          Get Started
        </Link>
        <Icons.arrow className="absolute bottom-4 left-[calc(50%+120px)] w-28 " />
      </div>
      <div className="relative flex justify-center ">
        <Image src={"/images/scr.webp"} alt="screen" height={500} width={900} />
        <Icons.bigarrow className="absolute w-40 -left-44 top-1/3" />
        <Icons.trophy className="absolute w-40 -right-28 top-2/3" />
      </div>
      <div className="flex flex-col items-center gap-6 py-12 ">
        <p className="text-2xl font-semibold ">To collaborate or Contribute</p>
        <div className="flex gap-6">
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "w-14 h-14",
              })}
            >
              <Icons.gitHub className="w-10 h-10" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={siteConfig.links.discord}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
                className: "w-14 h-14",
              })}
            >
              <Icons.discord className="w-10 h-10 fill-current" />
              <span className="sr-only">Discord</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
