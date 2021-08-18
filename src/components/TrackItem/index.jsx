import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { useFavorite } from '../../hooks/useFavorite'

const Track = styled.article`
    display: flex;
    gap: 5px;

    position: relative;

    .details {
        flex: 1;
    }

    .buttons {
        position: absolute;
        top: 3px;
        right: 3px;

        gap: 5px;


        
        a {
            color: var(--blue-600);
            padding: 0 4px;

            line-height: 1;
            font-size: 1rem;
        }
        
        button {
            background-color: transparent;
            border: none;
            color: var(--blue-600);

            cursor: pointer;

            padding: 0 4px;

            line-height: 1;
            font-size: 1rem;

        }
    }
`

const TrackItem = (props) => {
    const {
        track,
        selectedAudio
    } = props

    const { isFavorited, handleFaveClick } = useFavorite()

    const audioEl = useRef(null)
    const [playing, setPlaying] = useState(false)

    useEffect(() => {
        if (audioEl.current) {
            audioEl.current.addEventListener('ended', () => endSound())
            return audioEl.current.removeEventListener('ended', () => endSound())
        }
    }, [])

    useEffect(() => {
        selectedAudio != track.id && playing && endSound()
    }, [selectedAudio])

    const startSound = () => {
        if (props.audioStarted) props.audioStarted()
        audioEl.current.play()
        setPlaying(true)
    }

    const endSound = () => {
        audioEl.current.pause()
        audioEl.current.currentTime = 0
        setPlaying(false)
    }

    const toggleSound = () => {
        if (audioEl.current.paused) startSound()
        else endSound()
    }

    return (
        <Track>
            <img
                src={track.album.cover_small}
                alt={`album ${track.album.title}`}
            />

            <div className="details">
                <h6>{track.title_short}</h6>
            </div>


            <audio ref={audioEl} src={track.preview} />

            <div className="buttons">
                <button onClick={toggleSound}>
                    {
                        playing
                            ? <i className="fas fa-pause-circle"></i>
                            : <i className="fas fa-play"></i>
                    }
                </button>

                <button onClick={() => handleFaveClick(track)}>
                    {
                        isFavorited(track)
                            ? <i className="fas fa-star"></i>
                            : <i className="far fa-star"></i>
                    }
                </button>

                <a href={track.link} target="_blank">
                    <i className="fas fa-external-link-alt"></i>
                </a>

            </div>

        </Track>
    )

}

export { TrackItem }