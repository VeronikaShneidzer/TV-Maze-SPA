import { combineReducers } from 'redux';

import showsReducer from './showsReducer';
import episodesReducer from './episodesReducer';

const reducer = combineReducers({
    showsReducer,
    episodesReducer,
});

export default reducer;
