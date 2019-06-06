import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/homepage';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={HomePage} exact={true} />
        </Switch>
    </BrowserRouter>
);

export default AppRouter;