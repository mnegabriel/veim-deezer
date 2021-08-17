import { createSlice } from "@reduxjs/toolkit";

import { Api } from '../../services/api'

const pagination = 20
const api = new Api(pagination)

export const deezerSlice = createSlice({
    name: 'deezer',

    initialState: {
        currentIndex: 0,
        chartList: [],
        searchResults: [],
        loading: false
    },

    reducers: {
        addToChartList(state, action) {
            state.chartList.push(...action.payload)
        },

        setNewIndex(state) {
            state.currentIndex += pagination
        },

        setSearchResults(state, action) {
            state.searchResults = [...action.payload]
        },

        setLoadingState(state, action) {
            state.loading = action.payload
        }
    }
})

export const { addToChartList, setNewIndex, setSearchResults, setLoadingState } = deezerSlice.actions

export const fetchDeezerList = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(setLoadingState(true))
            const { currentIndex } = getState().deezer

            const tracks = await api.getChartTracks(currentIndex)

            dispatch(addToChartList(tracks))
            dispatch(setNewIndex())

        } catch (err) {
            console.error(err)
        } finally {
            dispatch(setLoadingState(false))
        }
    }
}

export const fetchDeezerSearchResults = (searchTerm) => {
    return async (dispatch) => {
        try {
            dispatch(setLoadingState(true))
            const searchResults = await api.getWithSearchTerm(searchTerm)

            dispatch(setSearchResults(searchResults))
        } catch (err) {
            console.error(err)
        } finally {

            dispatch(setLoadingState(false))
        }
    }
}

export const selectChartList = state => state.deezer.chartList
export const selectSearchResultsList = state => state.deezer.searchResults
export const selectLoadingState = state => state.deezer.loading

export default deezerSlice.reducer