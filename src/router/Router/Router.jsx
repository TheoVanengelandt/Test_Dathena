import React from 'react';
import { Redirect, Route, Router as BaseRouter, Switch } from 'react-router-dom';

import { LoadableHome } from '../../scenes/Home/LoadableHome';
import { history } from '../../services/history';

export const DEFAULT_ROUTE = '/home';

const Router = () => (
    <BaseRouter history={history}>
        <Switch>
            <Route exact path="/home" component={LoadableHome} />

            <Redirect to={DEFAULT_ROUTE} />
        </Switch>
    </BaseRouter>
);

export { Router };
