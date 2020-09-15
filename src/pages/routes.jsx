import { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/RouterConstants';

const Shows = lazy(() => import('./shows/shows'));
const NotFound = lazy(() => import('./notFound/notFound'));
const Empty = lazy(() => import('./empty/empty'));

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
