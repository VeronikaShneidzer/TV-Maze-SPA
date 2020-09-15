const HTTP_METHODS = Object.freeze({
    GET: 'GET',
});

const BASIC_URL = 'http://api.tvmaze.com';

const SHOWS_URLS = Object.freeze({
    GET_ALL_SHOWS_URL: `${BASIC_URL}/shows`,
});

export {
    HTTP_METHODS,
    SHOWS_URLS,
};
