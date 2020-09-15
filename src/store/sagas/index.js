import { all } from 'redux-saga/effects';

import SHOWS_SAGAS from './showsSagas';
import EPISODES_SAGAS from './episodesSagas';

const SAGAS = [
    ...SHOWS_SAGAS,
    ...EPISODES_SAGAS,
];

export default function* rootSaga() {
    yield all(SAGAS.map((saga) => saga()));
}
