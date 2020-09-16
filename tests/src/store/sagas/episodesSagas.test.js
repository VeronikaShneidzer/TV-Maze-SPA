import axios from 'axios';
import { testSaga } from 'redux-saga-test-plan';

import { getEpisodeSaga } from '../../../../src/store/sagas/episodesSagas';

import { getEpisode as getEpisodeCall } from '../../../../src/api/episodesAPI';

import { EPISODES_ACTION_TYPES } from '../../../../src/constants/ActionTypesConstants';

describe('episodesSagas.test.js', () => {
    it('getEpisodeSaga: it should done', () => {
        const id = 1;
        const action = {
            type: EPISODES_ACTION_TYPES.GET_EPISODE,
            payload: { id },
        };

        const saga = testSaga(getEpisodeSaga, action);

        saga.next()
            .call(getEpisodeCall, id)

            .next([])
            .put({
                type: EPISODES_ACTION_TYPES.EPISODE_RECEIVED,
                payload: {
                    episode: [],
                },
            })

            .next()
            .isDone();
    });
});
