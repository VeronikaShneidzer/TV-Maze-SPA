/* eslint-disable no-console,no-unused-vars */
import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { SHOWS_ACTION_TYPES } from '../../constants/ActionTypesConstants';

import Show from '../../components/show/Show';

import styles from './Shows.styles.css';

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
        if (!isEmpty(shows)) {
            console.log(shows[0]);
        }
    }, [shows]);

    return (
        <ul className={styles.hexGrid}>
            {
                !isEmpty(shows) && (
                    shows.map((show) => (
                        <Show show={show} key={`${show.title} key ${show.id}`} />
                    ))
                )
            }
        </ul>
    );
}

Shows.displayName = 'Shows';

export default Shows;
