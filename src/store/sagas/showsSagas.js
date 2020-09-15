import {
    put,
    call,
    takeLatest,
} from 'redux-saga/effects';

import {
    getShows as getShowsCall,
    getShow as getShowCall,
    getShowEpisodes as getShowEpisodesCall,
} from '../../api/showsAPI';
import { SHOWS_ACTION_TYPES } from '../../constants/ActionTypesConstants';

function* getShowsSaga() {
    const data = yield call(getShowsCall);

    yield put({
        type: SHOWS_ACTION_TYPES.SHOWS_RECEIVED,
        payload: {
            shows: data,
        },
    });
}

function* getShowSaga(action) {
    const { id } = action.payload;

    const data = yield call(getShowCall, id);

    yield put({
        type: SHOWS_ACTION_TYPES.SHOW_RECEIVED,
        payload: { show: data },
    });
}

function* getShowEpisodesSaga(action) {
    const { id } = action.payload;

    const data = yield call(getShowEpisodesCall, id);

    yield put({
        type: SHOWS_ACTION_TYPES.SHOW_EPISODES_RECEIVED,
        payload: { episodes: data },
    });
}

function* getShowsWatcher() {
    yield takeLatest(SHOWS_ACTION_TYPES.GET_SHOWS, getShowsSaga);
}

function* getShowWatcher() {
    yield takeLatest(SHOWS_ACTION_TYPES.GET_SHOW, getShowSaga);
}

function* getShowEpisodesWatcher() {
    yield takeLatest(SHOWS_ACTION_TYPES.GET_EPISODES_SHOW, getShowEpisodesSaga);
}

const SHOWS_SAGAS = [
    getShowsWatcher,
    getShowWatcher,
    getShowEpisodesWatcher,
];

export default SHOWS_SAGAS;
