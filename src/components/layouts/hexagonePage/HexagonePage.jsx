import React from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

import styles from './HexagonePage.styles.css';

const propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string,
        rating: PropTypes.string,
        genres: PropTypes.arrayOf,
        website: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        summary: PropTypes.string,
    }).isRequired,
};

function HexagonePage(props) {
    const { data } = props;

    const onClickHex = () => {
        window.location.replace(data.website);
    };

    return (
        <div className={styles.container}>
            <div className={styles.hexInfo}>
                <h1>{data.name}</h1>
                <p>{`Rating:  ${data.rating}`}</p>
                <p>{!isEmpty(data.genres) ? `Genres: ${data.genres.join(', ')}` : ''}</p>
                {/* eslint-disable-next-line react/no-danger */}
                <p className={styles.summary} dangerouslySetInnerHTML={{ __html: data.summary }} />
            </div>
            <div className={styles.hexGrid}>
                <div className={styles.hex}>
                    <div className={styles.hexIn}>
                        <span className={styles.hexLink} onClick={onClickHex} style={{ cursor: data.website ? 'pointer' : 'default' }}>
                            {
                                data.image
                                    ? (
                                        <div className={styles.img} style={{ backgroundImage: `url(${data.image})` }} />
                                    )
                                    : (
                                        <div className={styles.img} />
                                    )
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

HexagonePage.propTypes = propTypes;
HexagonePage.displayName = 'HexagonePage';

export default HexagonePage;
