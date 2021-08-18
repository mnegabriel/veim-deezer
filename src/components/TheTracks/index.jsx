import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDeezerList, selectChartList, selectLoadingState } from '../../features/deezer/deezerSlice'
import { InfiniteScrollHandler } from '../InfiniteScrollHandler'

const TheTracks = () => {

    const dispatch = useDispatch()

    const loading = useSelector(selectLoadingState)
    const tracks = useSelector(selectChartList)

    const addMoreTracks = () => !loading && dispatch(fetchDeezerList())

    const trackList = tracks.map(track =>
        <li key={track.id}>
            <p>{track.title_short}</p>
        </li>
    )

    return (
        <>
            <ul>{trackList}</ul>
            <InfiniteScrollHandler observerFn={() => addMoreTracks()} />
        </>
    )
}

export { TheTracks }