import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import deezerReducer from '../features/deezer/deezerSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        deezer: deezerReducer
    }
})