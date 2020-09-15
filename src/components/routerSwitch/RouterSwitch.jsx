import React, { useState, useEffect } from 'react';
import { head } from 'lodash';
import {
    Switch as ReactRouterSwitch,
    Route,
    Redirect,
    useLocation,
    useHistory,
} from 'react-router-dom';

import { getRoutes, emptyRoute, notFoundRoute } from '../../pages/routes';

function RouterSwitch() {
    const location = useLocation();
    const history = useHistory();

    const [availableRoutes, setAvailableRoutes] = useState([]);
    const [initialRoute, setInitialRoute] = useState({});

    useEffect(() => {
        const newAvailableRoutes = getRoutes();
        setInitialRoute(head(newAvailableRoutes));

        if (location.hash) {
            newAvailableRoutes.push(emptyRoute);
        } else {
            newAvailableRoutes.push(notFoundRoute);
        }

        setAvailableRoutes(newAvailableRoutes);

        window.reactRouterHistory = history;
    }, [history, location]);

    return (
        <ReactRouterSwitch>
            {!location.hash && initialRoute && initialRoute.path && <Redirect exact from="/" to={{ hash: '', pathname: initialRoute.path }} />}
            {!location.hash && initialRoute && initialRoute.path && <Redirect exact from="/index.html" to={{ hash: '', pathname: initialRoute.path }} />}
            {
                availableRoutes.map((route) => (
                    <Route
                        key={route.path}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                ))
            }
        </ReactRouterSwitch>
    );
}

RouterSwitch.displayName = 'RouterSwitch';

export default RouterSwitch;
