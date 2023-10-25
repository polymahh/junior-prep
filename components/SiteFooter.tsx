import React from "react"
import Link from "next/link"

export function SiteFooter() {
  return (
    <div className="flex justify-end gap-1 p-4">
      <span>Made with ♥ by</span>
      <Link
        href="https://github.com/polymahh"
        target="_blank"
        rel="noreferrer"
        className="text-highlight"
      >
        Othmane
      </Link>
    </div>
  )
}
