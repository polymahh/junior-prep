import MemberDialog from "./MemberDialog"
import React from "react"

function MemberSection() {
    return (
        <div className="border h-full rounded-lg flex flex-col gap-6 p-4">
            <div className=" border-b pb-1 flex justify-between">
                <span className="text-lg font-semibold">Members:</span>
                <MemberDialog />
            </div>
            <div>0 members ...</div>
        </div>
    )
}

export default MemberSection
