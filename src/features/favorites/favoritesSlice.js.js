import { createSlice } from "@reduxjs/toolkit";

import { getFavoritesData, setFavoritesData } from '../../helpers/localStorageManager'


export const favoritesSlice = createSlice({
    name: 'favorites',

    initialState: [],

    reducers: {
        addToFavorites(state, action) {
            state.push(action.payload)
            setFavoritesData(state)
        },

        removeFavorite(state, action) {
            const { id } = action.payload

            const selectedIndex = state.findIndex(fave => fave.id === id)

            if (selectedIndex > -1) {
                state.splice(selectedIndex, 1)

                setFavoritesData(state)
            }
        },

        setInitialState(state) {
            const data = getFavoritesData()
            state.push(...data)
        }
    }
})

export const {
    addToFavorites,
    removeFavorite,
    setInitialState
} = favoritesSlice.actions

export const selectFavorites = state => state.favorites

export default favoritesSlice.reducer