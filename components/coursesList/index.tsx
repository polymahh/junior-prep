"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { buttonVariants } from "../ui/button"

function CoursesList() {
  const courses = [
    {
      img: "/hqdefault.jpg",
    },
    {
      img: "/hqdefault (1).jpg",
    },
    {
      img: "/hqdefault (2).jpg",
    },
    {
      img: "/hqdefault (3).jpg",
    },
  ]
  console.log(courses)
  return (
    <div className=" rounded-lg border p-4 flex flex-col">
      <div className="rounded-sm border-b p-1">
        <span className="text-lg font-semibold">New Courses:</span>
      </div>
      <div className="flex flex-col items-center py-4">
        {courses?.map((item, indx) => {
          return (
            <div className="h-40">
              <Image
                key={indx}
                src={`/images${item.img}`}
                alt="img"
                width={240}
                height={160}
              />
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
