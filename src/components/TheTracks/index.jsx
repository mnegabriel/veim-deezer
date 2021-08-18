import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { fetchDeezerList, selectChartList, selectLoadingState } from '../../features/deezer/deezerSlice'
import { InfiniteScrollHandler } from '../InfiniteScrollHandler'
import { TrackList } from '../TrackList'


const Wrapper = styled.div`
    height: 70.5%;
    width: 100%;
    overflow-y: auto;    
`

const TheTracks = () => {

    const dispatch = useDispatch()

    const loading = useSelector(selectLoadingState)
    const tracks = useSelector(selectChartList)

    const addMoreTracks = () => !loading && dispatch(fetchDeezerList())

    return (
        <Wrapper>
            <TrackList tracks={tracks} />
            <InfiniteScrollHandler observerFn={() => addMoreTracks()} />
        </Wrapper>
    )
}

export { TheTracks }