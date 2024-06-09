import { InfiniteData, InfiniteQueryObserverResult } from "@tanstack/react-query"
import { useCallback, useRef } from "react"

function useScrollObserver(
    method: () => Promise<InfiniteQueryObserverResult<InfiniteData<any, unknown>, Error>>,
    isFetchingNextPage: boolean,
    hasNextPage: boolean,
    error: Error | null,
) {
    const intObserver = useRef<IntersectionObserver | null>()
    const lastItem = useCallback(
        (item: HTMLElement | null) => {
            if (isFetchingNextPage || error) return

            if (intObserver.current) intObserver.current.disconnect()

            intObserver.current = new IntersectionObserver(items => {
                if (items[0].isIntersecting && hasNextPage) {
                    method()
                }
            })

            if (item) intObserver.current.observe(item)
        },
        [isFetchingNextPage, method, hasNextPage],
    )

    return lastItem
}

export default useScrollObserver
