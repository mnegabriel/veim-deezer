import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice.js'
import deezerReducer from '../features/deezer/deezerSlice.js'

export default configureStore({
    reducer: {
        counter: counterReducer,
        deezer: deezerReducer
    }
})