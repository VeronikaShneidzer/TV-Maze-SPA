import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';

import { SHOWS_ACTION_TYPES } from './constants/ActionTypesConstants';

import './App.css';

function App() {
    const dispatch = useDispatch();

    const { shows } = useSelector((state) => ({
        shows: state.showsReducer.shows,
    }), shallowEqual);

    useEffect(() => {
        dispatch({ type: SHOWS_ACTION_TYPES.GET_SHOWS });
    }, [dispatch]);

    useEffect(() => {

    }, [shows]);

    return (
        <div className="App">
            {shows}
        </div>
    );
}

export default App;
