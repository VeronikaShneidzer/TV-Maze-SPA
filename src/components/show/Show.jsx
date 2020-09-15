/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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

    const onClickMovie = () => {
        history.push(`/film/${show.id}`);
    };

    return (
        <div className={styles.hex}>
            <div className={styles.hexIn}>
                <span className={styles.hexLink} onClick={onClickMovie}>
                    <div className={styles.img} style={{ backgroundImage: `url(${show.image.medium})` }} />
                    <h1 className={styles.title}>{ show.name }</h1>
                </span>
            </div>
        </div>
    );
}

Show.propTypes = propTypes;
Show.displayName = 'Show';

export default Show;
