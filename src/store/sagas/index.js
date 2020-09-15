import { all } from 'redux-saga/effects';

import SHOWS_SAGAS from './showsSagas';

const SAGAS = [
    ...SHOWS_SAGAS,
];

export default function* rootSaga() {
    yield all(SAGAS.map((saga) => saga()));
}
