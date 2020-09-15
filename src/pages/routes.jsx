import { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/RouterConstants';

const Shows = lazy(() => import('./shows/Shows'));
const NotFound = lazy(() => import('./notFound/NotFound'));
const Empty = lazy(() => import('./empty/Empty'));

const getRoutes = () => (
    [
        {
            exact: false,
            path: ROUTE_PATHS.SHOWS,
            component: Shows,
        },
        {
            exact: false,
            path: ROUTE_PATHS.SHOW,
            component: Shows,
        },
    ]
);

const notFoundRoute = {
    exact: false,
    path: '*',
    component: NotFound,
};

const emptyRoute = {
    exact: false,
    path: '*',
    component: Empty,
};

export {
    getRoutes,
    notFoundRoute,
    emptyRoute,
};
