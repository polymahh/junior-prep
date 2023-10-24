import React from "react"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center ">
      <div className="border rounded-xl h-1/2 w-1/2">{children}</div>
    </div>
  )
}

export default Layout
