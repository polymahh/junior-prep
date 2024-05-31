"use client"

import { buttonVariants } from "../ui/button"
import Image from "next/image"
import Link from "next/link"

function CoursesList() {
    const courses = [
        {
            img: "/hqdefault.jpg",
            title: "Next.js, Tailwind CSS, and MongoDB Project Tutorial - Ticketing App",
            source: "youtube",
        },
        {
            img: "/hqdefault(1).jpg",
            title: "Bun Tutorial - JavaScript Runtime (Node.js Alternative) [Full Course]",
            source: "youtube",
        },
        {
            img: "/hqdefault(2).jpg",
            title: "Next.js 13 E-Commerce Tutorial",
            source: "youtube",
        },
        // {
        //   img: "/hqdefault(3).jpg",
        //   title: "Full Stack Next.js, Typescript, Firebase Tutorial",
        //   source: "youtube",
        // },
    ]
    return (
        <div className="relative rounded-lg border p-4 flex flex-col  h-full">
            <div className="absolute top-0 left-0 h-full bg-black/75 rounded-lg w-full flex justify-center items-center">
                <span className="font-bold text-3xl ">Coming soon ...</span>
            </div>
            <div className="rounded-sm border-b p-1">
                <span className="text-lg font-semibold">New Courses:</span>
            </div>
            <div className="flex flex-col items-center py-4 gap-2">
                {courses?.map((item, indx) => {
                    return (
                        <div key={indx} className="w-full flex items-center gap-4 flex-wrap">
                            <Image key={indx} src={`/images${item.img}`} alt="img" width={240} height={160} />
                            <div className="w-[260px]">
                                <h3 className="pt-2 font-semibold truncate">{item.title}</h3>
                                <span className="text-muted-foreground ">{item.source}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Link
                className={buttonVariants({
                    variant: "link",
                    size: "link",
                    className: "self-end",
                })}
                href={"/"}
            >
                See More.
            </Link>
        </div>
    )
}

export default CoursesList
