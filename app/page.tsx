import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container relative grid items-center justify-center gap-12 pt-10 pb-8 md:py-16">
      <div className="absolute w-full h-screen top-32 -z-10 bg-gradient-linear"></div>
      <div className="flex max-w-[980px] flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-5xl md:text-7xl">
          Ace Your Interviews with{" "}
          <span className="whitespace-nowrap">Junior-Prep</span>.
        </h1>

        <p className="max-w-[700px] text- text-lg text-accent-foreground">
          Boost Confidence with The Ultimate Interview Preparation Resource
          Empowering Juniors to Excel.
        </p>
      </div>
      <div className="flex justify-center">
        <Link
          href={siteConfig.links.login}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants({
            className: "px-11 py-6 text-xl ",
          })}
        >
          Get Started
        </Link>
      </div>
      <div className="flex justify-center">
        <Image src={"/images/scr.webp"} alt="screen" height={500} width={900} />
      </div>
    </section>
  )
}
