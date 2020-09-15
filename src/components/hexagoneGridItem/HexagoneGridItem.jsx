import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { isEmpty } from 'lodash';

import HexagoneGrid from '../layouts/hexagoneGrid/HexagoneGrid';

const propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.shape({
            medium: PropTypes.string,
            original: PropTypes.string,
        }).isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
};

function HexagoneGridItem(props) {
    const { data } = props;
    const history = useHistory();

    const onClickShow = () => {
        history.push(`/shows/${data.id}`);
    };

    return (
        <HexagoneGrid
            onClick={onClickShow}
            title={data.name}
            image={isEmpty(data.image) ? '' : (data.image.medium || data.image.original)}
        />
    );
}

HexagoneGridItem.propTypes = propTypes;
HexagoneGridItem.displayName = 'HexagoneGridItem';

export default HexagoneGridItem;
