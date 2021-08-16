import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDeezerList, selectChartList } from '../../features/deezer/deezerSlice'

const Dashboard = () => {
    const dispatch = useDispatch()

    const tracks = useSelector(selectChartList)

    const trackList = tracks.map(track => <li key={track.id}>{track.id}</li>)

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => dispatch(fetchDeezerList())}>test</button>
            <ul>{trackList}</ul>
        </>
    )
}

export { Dashboard }