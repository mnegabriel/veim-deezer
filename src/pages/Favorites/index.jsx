import React from "react"
import styled from 'styled-components'

import { useFavorite } from '../../hooks/useFavorite'

import { TrackList } from "../../components/TrackList"

const Wrapper = styled.div`
    height: 78.7%;
    width: 100%;
    overflow-y: auto;    
`

const Favorites = () => {

    const { favorites } = useFavorite()

    return (
        <>
            <h1>Favoritos</h1>
            <Wrapper>
                <TrackList tracks={favorites} />
            </Wrapper>
        </>
    )
}

export { Favorites }