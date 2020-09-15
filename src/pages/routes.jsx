import { lazy } from 'react';

import { ROUTE_PATHS } from '../constants/RouterConstants';

const Shows = lazy(() => import('./shows/Shows'));
const Show = lazy(() => import('./show/Show'));
const NotFound = lazy(() => import('./notFound/NotFound'));

const getRoutes = () => (
    [
        {
            exact: true,
            path: ROUTE_PATHS.EMPTY,
            component: Shows,
        },
        {
            exact: true,
            path: ROUTE_PATHS.INDEX,
            component: Shows,
        },
        {
            exact: true,
            path: ROUTE_PATHS.SHOWS,
            component: Shows,
        },
        {
            exact: false,
            path: ROUTE_PATHS.SHOW,
            component: Show,
        },
        {
            exact: false,
            path: '*',
            component: NotFound,
        },
    ]
);

// eslint-disable-next-line import/prefer-default-export
export { getRoutes };
