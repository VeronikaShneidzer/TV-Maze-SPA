import { get } from './APIUtils';

import { SHOWS_URLS } from '../constants/APIConstants';

// eslint-disable-next-line import/prefer-default-export
export const getShows = () => {
    const url = SHOWS_URLS.GET_ALL_SHOWS_URL;

    return get(url);
};
