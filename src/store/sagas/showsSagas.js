import {
    put,
    call,
    takeLatest,
} from 'redux-saga/effects';

import { getShows as getShowsCall } from '../../api/showsAPI';
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

function* getShowsWatcher() {
    yield takeLatest(SHOWS_ACTION_TYPES.GET_SHOWS, getShowsSaga);
}

const SHOWS_SAGAS = [
    getShowsWatcher,
];

export default SHOWS_SAGAS;
