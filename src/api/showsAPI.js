import { get } from './APIUtils';

import { SHOWS_URLS } from '../constants/APIConstants';

export const getShows = () => {
    const url = SHOWS_URLS.GET_ALL_SHOWS_URL;

    return get(url);
};

export const getShow = (id) => {
    const url = SHOWS_URLS.generateGetShowInfoUrl(id);

    return get(url);
};

export const getShowEpisodes = (id) => {
    const url = SHOWS_URLS.generateGetShowEpisodesUrl(id);

    return get(url);
};
