import React, { useEffect } from "react"

function useDebounce(value: string, delay: number) {
    const [debounceValue, setDebounceValue] = React.useState(value)

    useEffect(() => {
        const handler = window.setTimeout(() => {
            setDebounceValue(value)
        }, delay)
        return () => {
            clearTimeout(handler)
        }
    }, [delay, value])

    return debounceValue
}

export default useDebounce
