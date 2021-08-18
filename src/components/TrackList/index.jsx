import React, { useState } from 'react'
import styled from 'styled-components'

import { TrackItem } from "../TrackItem";


const List = styled.ul`
    list-style: none;
    padding: 10px;

    >*:not(:last-child) {
        margin-bottom: 10px;
    }
`

const ListItem = styled.li`
    box-shadow: 1px 1px 4px 1px #00000022;
`

const TrackList = (props) => {
    const { tracks } = props

    const [mainAudio, setMainAudio] = useState(0)

    const trackList = tracks.map(track =>
        <ListItem key={track.id}>
            <TrackItem
                track={track}
                audioStarted={() => setMainAudio(track.id)}
                audioEnded={() => setMainAudio(null)}
                selectedAudio={mainAudio}
            />
        </ListItem>
    )

    return (
        <List>
            {trackList}
        </List>
    )
}

export { TrackList }