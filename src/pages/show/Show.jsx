/* eslint-disable no-console,no-unused-vars */
import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { SHOWS_ACTION_TYPES } from '../../constants/ActionTypesConstants';

import HexagonePage from '../../components/layouts/hexagonePage/HexagonePage';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const defaultProps = {
};

function Show(props) {
    const { match } = props;
    const dispatch = useDispatch();

    const [preparedData, setPreparedData] = useState([]);

    const { show, episodes } = useSelector((state) => ({
        show: state.showsReducer.show,
        episodes: state.showsReducer.episodes,
    }), shallowEqual);

    useEffect(() => {
        if (show) {
            setPreparedData({
                name: show.name,
                rating: show.rating.average,
                genres: show.genres,
                image: show.image.original,
                website: show.officialSite,
                summary: show.summary,
            });
        }
    }, [show]);

    useEffect(() => {
        const { id } = match.params;
        dispatch({ type: SHOWS_ACTION_TYPES.GET_SHOW, payload: { id } });
        dispatch({ type: SHOWS_ACTION_TYPES.GET_SHOW_EPISODES, payload: { id } });
    }, [match, dispatch]);

    return (
        <>
            {
                !isEmpty(preparedData) && (
                    <HexagonePage data={preparedData} />
                )
            }
        </>
    );
}

Show.propTypes = propTypes;
Show.defaultProps = defaultProps;
Show.displayName = 'Show';

export default Show;
