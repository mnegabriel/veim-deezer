import { useDispatch, useSelector } from "react-redux"

import { selectFavorites, removeFavorite, addToFavorites } from "../features/favorites/favoritesSlice.js"

function useFavorite() {

    const dispatch = useDispatch()

    const favorites = useSelector(selectFavorites)

    const isFavorited = track => favorites.some(fave => fave.id === track.id)

    const handleFaveClick = track => {
        if (isFavorited(track)) dispatch(removeFavorite(track))
        else dispatch(addToFavorites(track))
    }

    return { favorites, isFavorited, handleFaveClick }
}

export { useFavorite }