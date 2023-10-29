import React from "react"
import { Loader2 } from "lucide-react"

function Loader() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-2xl text-muted-foreground py-4">Please wait.</p>
      <Loader2 className=" h-20 w-20 animate-spin" />
      <p className=" text-muted-foreground">Loading...</p>
    </div>
  )
}

export default Loader
