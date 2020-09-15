import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SHOWS_ACTION_TYPES } from '../constants/ActionTypesConstants';

function Shows() {
    const dispatch = useDispatch();
    const history = useHistory();

    const { shows } = useSelector((state) => ({
        shows: state.showsReducer.shows,
    }), shallowEqual);

    useEffect(() => {
        history.push('/shows');
        dispatch({ type: SHOWS_ACTION_TYPES.GET_SHOWS });
    }, [dispatch, history]);

    useEffect(() => {

    }, [shows]);

    return (
        <div>
            {shows}
        </div>
    );
}

Shows.displayName = 'Shows';

export default Shows;
