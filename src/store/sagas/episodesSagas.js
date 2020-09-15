import {
    put,
    call,
    takeLatest,
} from 'redux-saga/effects';

import { getEpisode as getEpisodeCall } from '../../api/episodesAPI';

import { EPISODES_ACTION_TYPES } from '../../constants/ActionTypesConstants';

function* getEpisodeSaga(action) {
    const { id } = action.payload;

    const data = yield call(getEpisodeCall, id);

    yield put({
        type: EPISODES_ACTION_TYPES.EPISODE_RECEIVED,
        payload: { episode: data },
    });
}

function* getEpisodeWatcher() {
    yield takeLatest(EPISODES_ACTION_TYPES.GET_EPISODE, getEpisodeSaga);
}

const EPISODES_SAGAS = [
    getEpisodeWatcher,
];

export default EPISODES_SAGAS;
