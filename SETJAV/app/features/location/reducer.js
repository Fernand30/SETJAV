import { fromJS } from 'immutable';
import * as actionTypes from './constants';

const initialState = fromJS({
    isFetching: false,
    someData: [],
    errorMessage: null,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA:
            return state.merge({
                isFetching: true,
            });
        case actionTypes.FETCH_DATA_COMPLETED:
            return state.merge({
                isFetching: false,
                someData: action.payload.data,
            });
        case actionTypes.FETCH_DATA_ERROR:
            return state.merge({
                isFetching: false,
                errorMessage: action.payload.errorMessage,
            });
        default:
            return state;
    }
};
