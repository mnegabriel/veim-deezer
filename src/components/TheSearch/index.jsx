import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchDeezerSearchResults, selectLoadingState, selectSearchLock, selectSearchResultsList, selectSearchTerm } from '../../features/deezer/deezerSlice'

import { InfiniteScrollHandler } from '../InfiniteScrollHandler'
import { TheSearchInput } from '../TheSearchInput'
import { TrackList } from '../TrackList'

const Wrapper = styled.div`
    height: 65.1%;
    width: 100%;
    overflow-y: auto;    
`

const TheSearch = () => {
    const dispatch = useDispatch()

    const searchTerm = useSelector(selectSearchTerm)
    const searchLock = useSelector(selectSearchLock)

    const searchResults = useSelector(selectSearchResultsList)

    const loading = useSelector(selectLoadingState)

    const addMoreSearchResults = () =>
        !loading && dispatch(fetchDeezerSearchResults())

    return (
        <>
            <TheSearchInput />
            <Wrapper>
                <TrackList tracks={searchResults} />
                {
                    searchTerm && !searchLock
                        ? <InfiniteScrollHandler observerFn={() => addMoreSearchResults()} />
                        : <></>
                }
            </Wrapper>
        </>
    )
}

export { TheSearch }