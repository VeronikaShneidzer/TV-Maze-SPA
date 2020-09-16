import axios from 'axios';
import { testSaga } from 'redux-saga-test-plan';

import {
    getShowsSaga,
    getShowSaga,
    getShowEpisodesSaga,
} from '../../../../src/store/sagas/showsSagas';

import {
    getShows as getShowsCall,
    getShow as getShowCall,
    getShowEpisodes as getShowEpisodesCall,
} from '../../../../src/api/showsAPI';

import { SHOWS_ACTION_TYPES } from '../../../../src/constants/ActionTypesConstants';

describe('showsSagas.test.js', () => {
    it('getShowsSaga: it should done', () => {
        const saga = testSaga(getShowsSaga);

        saga.next()
            .call(getShowsCall)

            .next([])
            .put({
                type: SHOWS_ACTION_TYPES.SHOWS_RECEIVED,
                payload: {
                    shows: [],
                },
            })

            .next()
            .isDone();
    });

    it('getShowSaga: it should done', () => {
        const id = 1;
        const action = {
            type: SHOWS_ACTION_TYPES.GET_SHOW,
            payload: { id },
        };

        const saga = testSaga(getShowSaga, action);

        saga.next()
            .call(getShowCall, id)

            .next([])
            .put({
                type: SHOWS_ACTION_TYPES.SHOW_RECEIVED,
                payload: {
                    show: [],
                },
            })

            .next()
            .isDone();
    });

    it('getShowEpisodesSaga: it should done', () => {
        const id = 1;
        const action = {
            type: SHOWS_ACTION_TYPES.GET_SHOW_EPISODES,
            payload: { id },
        };

        const saga = testSaga(getShowEpisodesSaga, action);

        saga.next()
            .call(getShowEpisodesCall, id)

            .next([])
            .put({
                type: SHOWS_ACTION_TYPES.SHOW_EPISODES_RECEIVED,
                payload: {
                    episodes: [],
                },
            })

            .next()
            .isDone();
    });
});
