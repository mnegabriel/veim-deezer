import React from "react"

import { useFavorite } from '../../hooks/useFavorite'

const Favorites = () => {

    const { favorites, isFavorited, handleFaveClick } = useFavorite()

    const favoritesList = favorites.map(fave => (
        <li key={fave.id}>
            <p>{fave.title_short}</p>
            <p>{fave.artist.name}</p>
            <button onClick={() => handleFaveClick(fave)}>
                {isFavorited(fave) ? 'remove of Faves' : 'add to Faves'}
            </button>
        </li>
    ))

    return (
        <>
            <h1>Favoritos</h1>
            <ul>{favoritesList}</ul>
        </>
    )
}

export { Favorites }