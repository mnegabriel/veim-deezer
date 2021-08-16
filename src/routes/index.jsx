import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Favorites } from '../pages/Favorites';
import { About } from '../pages/About';

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/favoritos" component={Favorites} />
        <Route path="/sobre" component={About} />
    </Switch>
);

export { Routes };