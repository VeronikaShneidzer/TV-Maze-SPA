import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

import { EPISODES_ACTION_TYPES } from '../../constants/ActionTypesConstants';

import HexagonePage from '../../components/layouts/hexagonePage/HexagonePage';

const propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

function Episode(props) {
    const { match } = props;
    const dispatch = useDispatch();

    const [preparedShowsData, setPreparedShowsData] = useState([]);

    const { episode } = useSelector((state) => ({
        episode: state.episodesReducer.episode,
    }), shallowEqual);

    useEffect(() => {
        if (!isEmpty(episode)) {
            setPreparedShowsData({
                name: episode.name,
                season: episode.season,
                number: episode.number,
                image: isEmpty(episode.image) ? '' : (episode.image.medium || episode.image.original),
                summary: episode.summary,
            });
        }
    }, [episode]);

    useEffect(() => {
        const { id } = match.params;
        dispatch({ type: EPISODES_ACTION_TYPES.GET_EPISODE, payload: { id } });
    }, [match, dispatch]);

    return (
        <>
            {
                !isEmpty(preparedShowsData) && (
                    <HexagonePage data={preparedShowsData} />
                )
            }
        </>
    );
}

Episode.propTypes = propTypes;
Episode.displayName = 'Episode';

export default Episode;
