import Link from "next/link"
import React from "react"

export function SiteFooter() {
    return (
        <div className="flex justify-end gap-1 p-4">
            <span>Made with ♥ by</span>
            <Link href="https://github.com/polymahh" target="_blank" rel="noreferrer" className="text-again">
                PolyMad
            </Link>
        </div>
    )
}
