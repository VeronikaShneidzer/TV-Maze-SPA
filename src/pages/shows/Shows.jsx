/* eslint-disable no-console,no-unused-vars */
import React, { useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import { SHOWS_ACTION_TYPES } from '../../constants/ActionTypesConstants';

import ShowListItem from '../../components/showListItem/ShowListItem';

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

    return (
        <ul className={styles.hexGrid}>
            {
                !isEmpty(shows) && (
                    shows.map((show) => (
                        <ShowListItem show={show} key={`${show.title} key ${show.id}`} />
                    ))
                )
            }
        </ul>
    );
}

Shows.displayName = 'Shows';

export default Shows;
