import React, { useState } from 'react'
import styled from 'styled-components'

import { TheSearch } from '../../components/TheSearch'
import { TheTracks } from '../../components/TheTracks'

const RadioInput = styled.input`
    position: absolute;
    top: -999999vh;
    left: -999999vw;
`

const RadioLabel = styled.label`
    display: inline-flex;
    height: 35px;
    width: 50%;
    max-width: 120px;

    color: var(--blue-600);
    border: 2px solid var(--blue-600);

    justify-content: center;
    align-items: center;

    cursor: pointer;

    :first-child {
        border-radius: 100px 0 0 100px;
    }

    :last-child {
        border-radius: 0 100px 100px 0;
    }

    ${({ filled }) => (filled === true
        ? `
            color: white;
            background-color: var(--blue-600);
            cursor: default;
        `
        : ''
    )}
`

const RadioList = styled.div`
    display: flex;
    justify-content: center;

    margin: 15px 0;
`

const Dashboard = () => {
    const [searchMode, setSearchMode] = useState(0)

    const toggleSearch = (bool) => {
        if (bool) setSearchMode(1)
        else setSearchMode(0)
    }

    const options = [
        {
            label: 'Charts',
            val: 0
        },
        {
            label: 'Busca',
            val: 1
        },
    ]

    const raadioButtons = () => (
        <>
            <RadioList>
                {options.map(opt =>
                    <RadioLabel key={opt.label} filled={searchMode == opt.val}>
                        <span>
                            {opt.label}
                        </span>
                        <RadioInput
                            type="radio"
                            name="explore_radio"
                            value={(opt.val)}
                            checked={searchMode == opt.val}
                            onChange={() => toggleSearch(opt.val)}
                        />
                    </RadioLabel>
                )}
            </RadioList>
        </>
    )

    return (
        <>
            <h1>Explorar</h1>
            {raadioButtons()}
            {searchMode ? <TheSearch /> : <TheTracks />}
        </>
    )
}

export { Dashboard }