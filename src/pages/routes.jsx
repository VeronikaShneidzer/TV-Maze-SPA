import { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/RouterConstants';

const Shows = lazy(() => import('./shows'));
const NotFound = lazy(() => import('./notFound'));
const Empty = lazy(() => import('./empty'));

const getRoutes = () => (
    [
        {
            exact: false,
            path: ROUTE_PATHS.SHOWS,
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
