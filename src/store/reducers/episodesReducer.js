import { EPISODES_ACTION_TYPES } from '../../constants/ActionTypesConstants';

const initialState = {};

const episodesReducer = (state = initialState, action) => {
    switch (action.type) {
    case EPISODES_ACTION_TYPES.EPISODE_RECEIVED:
        return {
            ...state,
            episode: action.payload.episode,
        };
    default:
        return state;
    }
};

export default episodesReducer;
