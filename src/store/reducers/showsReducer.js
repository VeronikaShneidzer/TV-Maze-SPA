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
            isLoading: false,
        };
    default:
        return state;
    }
};

export default showsReducer;
