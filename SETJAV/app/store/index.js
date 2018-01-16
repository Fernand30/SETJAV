import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { Iterable } from 'immutable';
import thunkMiddleware from 'redux-thunk';

import { epicMiddleware } from '../redux/epics';
import { createReducer } from '../redux/reducers';

const stateTransformer = (state) => {
    if (Iterable.isIterable(state)) {
        return state.toJS();
    }
    return state;
};

const middleware = [thunkMiddleware, epicMiddleware];
if (__DEV__ === true) { // eslint-disable-line
    middleware.push(createLogger({ stateTransformer }));
}

const createStoreWithMiddleware = compose(applyMiddleware(...middleware))(createStore);
export const store = createStoreWithMiddleware(createReducer());
