import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchDeezerSearchResults, selectLoadingState, selectSearchLock, selectSearchResultsList, selectSearchTerm } from '../../features/deezer/deezerSlice'

import { InfiniteScrollHandler } from '../InfiniteScrollHandler'
import { TheSearchInput } from '../TheSearchInput'

const TheSearch = () => {
    const dispatch = useDispatch()

    const searchTerm = useSelector(selectSearchTerm)
    const searchLock = useSelector(selectSearchLock)

    const searchResults = useSelector(selectSearchResultsList)
    const searchResultsList = searchResults.map(track =>
        <li key={track.id}>
            <p>{track.title_short}</p>
        </li>
    )

    const loading = useSelector(selectLoadingState)

    const addMoreSearchResults = () =>
        !loading && dispatch(fetchDeezerSearchResults())

    return (
        <>
            <TheSearchInput />
            <ul>{searchResultsList}</ul>
            {
                searchTerm && !searchLock
                    ? <InfiniteScrollHandler observerFn={() => addMoreSearchResults()} />
                    : <></>
            }
        </>
    )
}

export { TheSearch }