import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    useLocation,
    useHistory,
} from 'react-router-dom';

import { getRoutes } from '../../pages/routes';

function RouterSwitch() {
    const location = useLocation();
    const history = useHistory();

    const [availableRoutes, setAvailableRoutes] = useState([]);

    useEffect(() => {
        const newAvailableRoutes = getRoutes();

        setAvailableRoutes(newAvailableRoutes);
        window.reactRouterHistory = history;
    }, [history, location]);

    return (
        <Switch>
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
        </Switch>
    );
}

RouterSwitch.displayName = 'RouterSwitch';

export default RouterSwitch;
