import { get } from './APIUtils';

import { EPISODES_URLS } from '../constants/APIConstants';

// eslint-disable-next-line import/prefer-default-export
export const getEpisode = (id) => {
    const url = EPISODES_URLS.generateGetEpisodeInfoUrl(id);

    return get(url);
};
