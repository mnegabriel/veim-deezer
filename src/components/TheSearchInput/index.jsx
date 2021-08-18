import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import { fetchDeezerSearchResults, resetSearchIndex, setSearchLock, setSearchTerm } from "../../features/deezer/deezerSlice"

const Search = styled.div`
    .wrapper {
        max-width: 400px;
        margin: auto;

        display: flex;

        justify-content: space-between;
        gap: 10px;

        
        .input-clear {
            flex: 1;
            position: relative;
            display: flex;
            
            input {
                flex: 1;
                padding: 8px 28px 8px 15px;
                border-radius: 20px;
                border: 2px solid var(--blue-600);
                
                &:focus{
                    outline: 2px solid var(--blue-600);
                }
            }

            button {
                position: absolute;
                right: 8px;
                top: 50%;

                transform: translateY(-50%);

                background-color: transparent;
                border: none;
            }
        }

        .fetch {
            border: none;
            border-radius: 20px;
            color: white;
            background-color: var(--blue-600);

            flex-basis: 80px;

        }
    }
`

const TheSearchInput = () => {
    const dispatch = useDispatch()

    const [searchString, setSearchString] = useState('')
    const handleTermInput = e => setSearchString(e.target.value)
    const clearSearch = () => setSearchString('')

    const fetchSearchResults = () => {
        if (searchString) {
            dispatch(resetSearchIndex())
            dispatch(setSearchTerm(searchString))
            dispatch(setSearchLock(false))
            dispatch(fetchDeezerSearchResults())
        }
    }

    return (
        <Search>
            <div className="wrapper">
                <div className="input-clear">
                    <input type="text" value={searchString} onChange={handleTermInput} />
                    {searchString
                        ? (
                            <button onClick={clearSearch}><i
                                className="fas fa-times"
                                title="Limpar"
                            ></i></button>
                        )
                        : <></>}
                </div>
                <button className="fetch" onClick={fetchSearchResults}>
                    <i
                        className="fas fa-search"
                        title="Buscar"
                    ></i>
                </button>
            </div>
        </Search>
    )
}

export { TheSearchInput }