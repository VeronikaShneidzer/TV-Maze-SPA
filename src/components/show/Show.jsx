/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import HexagoneGrid from '../layouts/hexagoneGrid/HexagoneGrid';

import styles from './Show.styles.css';

const propTypes = {
    show: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.shape({
            medium: PropTypes.string.isRequired,
        }).isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

function Show(props) {
    const { show } = props;
    const history = useHistory();

    const onClickShow = () => {
        history.push(`/film/${show.id}`);
    };

    return (
        <HexagoneGrid
            onClick={onClickShow}
            title={show.name}
            image={show.image.medium}
        />
    );
}

Show.propTypes = propTypes;
Show.displayName = 'Show';

export default Show;
