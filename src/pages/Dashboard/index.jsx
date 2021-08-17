import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InfiniteScrollHandler } from '../../components/InfiniteScrollHandler'

import { selectChartList, selectSearchResultsList, fetchDeezerSearchResults } from '../../features/deezer/deezerSlice'

import { useFavorite } from '../../hooks/useFavorite'

const Dashboard = () => {
    const dispatch = useDispatch()

    const tracks = useSelector(selectChartList)
    const searchResults = useSelector(selectSearchResultsList)

    const { isFavorited, handleFaveClick } = useFavorite()

    const trackList = tracks.map(track =>
        <li key={track.id}>
            <p>{track.title_short}</p>
            {/* <p>{track.artist.name}</p>
            <button onClick={() => handleFaveClick(track)}>
                {isFavorited(track) ? 'remove of Faves' : 'add to Faves'}
            </button> */}
        </li>
    )

    const searchResultsList = searchResults.map(track =>
        <li key={track.id}>
            <p>{track.title_short}</p>
            {/* <p>{track.artist.name}</p>
            <button onClick={() => handleFaveClick(track)}>
                {isFavorited(track) ? 'remove of Faves' : 'add to Faves'}
            </button> */}
        </li>
    )

    const [searchMode, setSearchMode] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const toggleSearch = () => {
        setSearchMode(!searchMode)
        setSearchTerm('')
    }

    const handleTermInput = e => setSearchTerm(e.target.value)

    const fetchSearchResults = async (e) => {
        if (searchTerm) {
            dispatch(await fetchDeezerSearchResults(searchTerm))
            setSearchTerm('')
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => { !searchMode ? toggleSearch() : fetchSearchResults() }}>Busca</button>
            {
                searchMode
                    ? (
                        <>
                            <input type="text" value={searchTerm} onChange={handleTermInput} />
                            <button onClick={toggleSearch}>x</button>
                            <ul>{searchResultsList}</ul>
                        </>
                    )
                    : trackList.length
                        ? (
                            <>
                                <ul>{trackList}</ul>
                                <InfiniteScrollHandler />
                            </>

                        )
                        : <></>
            }
        </>
    )
}

export { Dashboard }