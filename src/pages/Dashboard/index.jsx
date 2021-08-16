import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDeezerList, selectChartList } from '../../features/deezer/deezerSlice'
import { setInitialState } from '../../features/favorites/favoritesSlice.js'

const Dashboard = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setInitialState())
    }, [])

    const tracks = useSelector(selectChartList)

    const trackList = tracks.map(track =>
        <li key={track.id}>
            <pre>
                {JSON.stringify(track, null, 4)}
            </pre>
        </li>
    )

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => dispatch(fetchDeezerList())}>test</button>
            <ul>{trackList}</ul>
        </>
    )
}

export { Dashboard }