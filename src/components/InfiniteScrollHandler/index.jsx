import React, { useEffect, useRef } from 'react'

const InfiniteScrollHandler = (props) => {
    const elRef = useRef(null)

    useEffect(() => {
        if (props.observerFn) {

            const observerHandler = (entries) =>
                entries.forEach(e => e.isIntersecting && props.observerFn())

            const observer = new IntersectionObserver(observerHandler)
            observer.observe(elRef.current)

            return () => observer.disconnect()
        }
    }, [])

    return (
        <p ref={elRef}>InfiniteScroller</p>
    )
}

export { InfiniteScrollHandler }