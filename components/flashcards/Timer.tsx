import { useEffect, useState } from "react"

const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60

let timeStart = 10

export const Timer = () => {
  const [time, setTime] = useState(timeStart)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return (
    <div className="flex min-w-[106px]">
      <p>
        Time: {hours < 10 ? "0" + hours : hours}:
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </p>
    </div>
  )
}
