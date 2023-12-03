"use client"

import React from "react"
import * as z from "zod"

import CommentInput from "./commentInput"

function Comments() {
  return (
    <div className="border h-full rounded-lg flex flex-col gap-6 p-4">
      <div className=" border-b pb-1 flex justify-between">
        <span className="text-lg font-semibold">Discussion </span>
      </div>
      <div>
        <CommentInput />
      </div>
      <div>comments here</div>
    </div>
  )
}

export default Comments
