import { createSlice } from "@reduxjs/toolkit";


export const deezerSlice = createSlice({
    name: 'deezer',
    initialState: {
        list: []
    },
    reducers: {
        seInitialtList(state) {
            state.list = [...state.list]
        }
    }
})

const fetchDeezerList = (userId) => {
    return async (dispatch, getState) => {
        try {
            const user = await userAPI.fetchById(userId)
            dispatch(userLoaded(user))
        } catch (err) {
        }
    }
}