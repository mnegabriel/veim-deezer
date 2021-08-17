import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Favorites } from '../pages/Favorites';
import { About } from '../pages/About';


import { fetchDeezerList } from '../features/deezer/deezerSlice';
import { setInitialState } from '../features/favorites/favoritesSlice.js';
import { useDispatch } from 'react-redux';

const Routes = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        async function init() {
            await dispatch(fetchDeezerList())
            dispatch(setInitialState())
        }

        init()
    }, [])


    return (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/favoritos" component={Favorites} />
        <Route path="/sobre" component={About} />
    </Switch>
    )
};

export { Routes };