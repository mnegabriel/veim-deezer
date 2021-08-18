import React, { useState } from 'react'

import { TheSearch } from '../../components/TheSearch'
import { TheTracks } from '../../components/TheTracks'

const Dashboard = () => {
    const [searchMode, setSearchMode] = useState(false)

    const toggleSearch = () => {
        setSearchMode(!searchMode)
    }

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={toggleSearch}>{searchMode ? 'Charts' : 'Busca'}</button>
            {searchMode ? <TheSearch /> : <TheTracks />}
        </>
    )
}

export { Dashboard }