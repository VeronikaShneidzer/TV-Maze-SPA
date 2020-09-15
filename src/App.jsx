import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterSwitch from './components/routerSwitch/RouterSwitch';

import { BASE_PATH } from './constants/RouterConstants';

function App() {
    return (
        <>
            <BrowserRouter basename={BASE_PATH}>
                <Suspense fallback={<div>loading...</div>}>
                    <RouterSwitch />
                </Suspense>
            </BrowserRouter>
        </>
    );
}

export default App;
