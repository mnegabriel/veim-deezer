import { configureStore } from '@reduxjs/toolkit'

import deezerReducer from '../features/deezer/deezerSlice.js'
import favoritesReducer from '../features/favorites/favoritesSlice.js'

export default configureStore({
    reducer: {
        deezer: deezerReducer,
        favorites: favoritesReducer
    }
})