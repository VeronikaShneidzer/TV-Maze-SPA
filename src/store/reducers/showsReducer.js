import { SHOWS_ACTION_TYPES } from '../../constants/ActionTypesConstants';

const initialState = {
    shows: [],
};

const showsReducer = (state = initialState, action) => {
    switch (action.type) {
    case SHOWS_ACTION_TYPES.SHOWS_RECEIVED:
        return {
            ...state,
            shows: action.payload.shows,
        };
    case SHOWS_ACTION_TYPES.SHOW_RECEIVED:
        return {
            ...state,
            show: action.payload.show,
        };
    case SHOWS_ACTION_TYPES.SHOW_EPISODES_RECEIVED:
        return {
            ...state,
            episodes: action.payload.episodes,
        };
    default:
        return state;
    }
};

export default showsReducer;
