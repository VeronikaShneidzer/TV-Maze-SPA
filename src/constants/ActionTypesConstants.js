const SHOWS_ACTION_TYPES = Object.freeze({
    GET_SHOWS: 'get shows',
    SHOWS_RECEIVED: 'shows received',
    GET_SHOW: 'get show',
    SHOW_RECEIVED: 'show received',
    GET_SHOW_EPISODES: 'get show episodes',
    SHOW_EPISODES_RECEIVED: 'show episodes received',
});

const EPISODES_ACTION_TYPES = Object.freeze({
    GET_EPISODE: 'get show',
    EPISODE_RECEIVED: 'show received',
});

export {
    SHOWS_ACTION_TYPES,
    EPISODES_ACTION_TYPES,
};
