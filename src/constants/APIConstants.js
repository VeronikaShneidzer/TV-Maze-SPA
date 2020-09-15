const HTTP_METHODS = Object.freeze({
    GET: 'GET',
});

const BASIC_URL = 'http://api.tvmaze.com';
const SHOWS_URL_PART = '/shows';
const EPISODES_URL_PART = '/episodes';

const SHOWS_URLS = Object.freeze({
    GET_ALL_SHOWS_URL: `${BASIC_URL}${SHOWS_URL_PART}`,
    generateGetShowInfoUrl: (id) => `${BASIC_URL}${SHOWS_URL_PART}/${id}`,
    generateGetShowEpisodesUrl: (id) => `${BASIC_URL}${SHOWS_URL_PART}/${id}/episodes`,
});

const EPISODES_URLS = Object.freeze({
    generateGetEpisodeInfoUrl: (id) => `${BASIC_URL}${EPISODES_URL_PART}/${id}`,
});

export {
    HTTP_METHODS,
    SHOWS_URL_PART,
    EPISODES_URL_PART,
    SHOWS_URLS,
    EPISODES_URLS,
};
