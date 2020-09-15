import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(sagaMiddleware))(createStore);

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(rootReducer, initialState);
    store.runSaga = () => {
        sagaMiddleware.run(rootSaga);
        return store;
    };
    store.close = () => {
        store.dispatch(END);
        return store;
    };

    return store;
}
