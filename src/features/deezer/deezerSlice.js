import { createSlice } from "@reduxjs/toolkit";

import { Api } from '../../services/api'

const pagination = 20
const api = new Api(pagination)

export const deezerSlice = createSlice({
    name: 'deezer',

    initialState: {
        currentTracksIndex: 0,
        chartList: [],
        searchTerm: '',
        currentSearchIndex: 0,
        searchResults: [],
        searchLock: false,
        loading: false
    },

    reducers: {
        setNewTracksIndex(state) {
            state.currentTracksIndex += pagination
        },

        addToChartList(state, action) {
            state.chartList.push(...action.payload)
        },

        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        },

        setNewSearchIndex(state) {
            state.currentSearchIndex += pagination
        },

        resetSearchIndex(state) {
            state.currentSearchIndex = 0
        },

        resetSearchResults(state) {
            state.searchResults = []
        },

        addToSearchResults(state, action) {
            state.searchResults.push(...action.payload)
        },

        setLoadingState(state, action) {
            state.loading = action.payload
        },

        setSearchLock(state, action) {
            state.searchLock = action.payload
        }
    }
})

export const {
    setNewTracksIndex,
    addToChartList,
    setSearchTerm,
    setNewSearchIndex,
    resetSearchIndex,
    resetSearchResults,
    addToSearchResults,
    setLoadingState,
    setSearchLock
} = deezerSlice.actions

export const fetchDeezerList = () => {
    return async (dispatch, getState) => {
        const { currentTracksIndex, loading } = getState().deezer
        if (!loading) {

            try {
                dispatch(setLoadingState(true))

                const tracks = await api.getChartTracks(currentTracksIndex)

                dispatch(addToChartList(tracks))
                dispatch(setNewTracksIndex())
            } catch (err) {
                console.error(err)
            } finally {
                dispatch(setLoadingState(false))
            }
        }
    }
}

export const fetchDeezerSearchResults = () => {
    return async (dispatch, getState) => {
        const { searchTerm, currentSearchIndex, loading, searchLock, searchResults } = getState().deezer

        if (!loading) {
            try {
                dispatch(setLoadingState(true))

                let pastResults = searchResults

                if (currentSearchIndex === 0) {
                    dispatch(resetSearchResults())
                    pastResults = []
                }

                if (!searchLock) {
                    const searchResponse =
                        await api.getWithSearchTerm(searchTerm, currentSearchIndex)

                    const checkedResults =
                        searchResponse.filter(item =>
                            !pastResults.some(track => track.id === item.id)
                        )

                    dispatch(addToSearchResults(checkedResults))

                    if (searchResponse.length < pagination) {
                        dispatch(setSearchLock(true))
                    }

                    dispatch(setNewSearchIndex())
                }

            } catch (err) {
                console.error(err)
            } finally {
                dispatch(setLoadingState(false))
            }
        }
    }
}

export const selectChartList = state => state.deezer.chartList
export const selectSearchResultsList = state => state.deezer.searchResults
export const selectSearchTerm = state => state.deezer.searchTerm
export const selectLoadingState = state => state.deezer.loading
export const selectSearchLock = state => state.deezer.searchLock

export default deezerSlice.reducer