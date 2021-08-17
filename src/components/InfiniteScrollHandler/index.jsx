import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeezerList, selectLoadingState } from '../../features/deezer/deezerSlice'

const InfiniteScrollHandler = () => {
    const elRef = useRef(null)

    const dispatch = useDispatch()

    const loading = useSelector(selectLoadingState)

    useEffect(() => {
        const observer = new IntersectionObserver(addMoreTracks)
        observer.observe(elRef.current)

        return () => observer.disconnect()
    }, [])

    const addMoreTracks = (entries) =>
        entries.forEach(() => !loading && dispatch(fetchDeezerList()))

    return (
        <p ref={elRef}>InfiniteScroller</p>
    )
}

export { InfiniteScrollHandler }