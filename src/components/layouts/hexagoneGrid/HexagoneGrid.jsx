import React from 'react';
import PropTypes from 'prop-types';

import styles from './HexagoneGrid.styles.css';

const propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    image: PropTypes.string,
};

const defaultProps = {
    onClick: () => {},
    title: '',
    image: '',
};

function HexagoneGrid(props) {
    const { onClick, title, image } = props;

    return (
        <div className={styles.hex}>
            <div className={styles.hexIn}>
                <span className={styles.hexLink} onClick={onClick}>
                    <div className={styles.img} style={{ backgroundImage: `url(${image})` }} />
                    <h1 className={styles.title}>{ title }</h1>
                </span>
            </div>
        </div>
    );
}

HexagoneGrid.propTypes = propTypes;
HexagoneGrid.defaultProps = defaultProps;
HexagoneGrid.displayName = 'HexagoneGrid';

export default HexagoneGrid;
