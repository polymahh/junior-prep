import React from "react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <div className="flex justify-end p-4">
      <Link
        href="https://github.com/polymahh"
        target="_blank"
        rel="noreferrer"
        className=" text-fuchsia-700"
      >
        Made with ♥ by Othmane
      </Link>
    </div>
  )
}
