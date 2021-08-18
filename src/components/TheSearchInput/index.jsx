import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchDeezerSearchResults, resetSearchIndex, setSearchLock, setSearchTerm } from "../../features/deezer/deezerSlice"


const TheSearchInput = () => {
    const dispatch = useDispatch()

    const [searchString, setSearchString] = useState('')
    const handleTermInput = e => setSearchString(e.target.value)
    const clearSearch = () => setSearchString('')

    const fetchSearchResults = async () => {
        if (searchString) {
            dispatch(resetSearchIndex())
            dispatch(setSearchTerm(searchString))
            dispatch(setSearchLock(false))
            dispatch(await fetchDeezerSearchResults())
        }
    }

    return (
        <div>
            <input type="text" value={searchString} onChange={handleTermInput} />
            <button onClick={clearSearch}>x</button>
            <button onClick={fetchSearchResults}>Buscar</button>
        </div>
    )
}

export { TheSearchInput }