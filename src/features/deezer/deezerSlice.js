import { createSlice } from "@reduxjs/toolkit";

import { Api } from '../../services/api'

const pagination = 20
const api = new Api(pagination)

export const deezerSlice = createSlice({
    name: 'deezer',

    initialState: {
        currentIndex: 0,
        chartList: []
    },

    reducers: {
        addToChartList(state, action) {
            state.chartList.push(...action.payload)
        },

        setNewIndex(state) {
            state.currentIndex += pagination
        }
    }
})

export const { addToChartList, setNewIndex } = deezerSlice.actions

export const fetchDeezerList = () => {
    return async (dispatch, getState) => {
        try {
            const { currentIndex } = getState().deezer

            const tracks = await api.getChartTracks(currentIndex)

            dispatch(addToChartList(tracks))
            dispatch(setNewIndex())

        } catch (err) {
            console.error(err)
        }
    }
}

export const selectChartList = state => state.deezer.chartList

export default deezerSlice.reducer