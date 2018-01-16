import { fromJS } from 'immutable';
import * as actionTypes from '../constants/system';

const initialState = fromJS({
    logoutState: true,
    manageBookingState: true,
    environment: null,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.MANAGE_BOOKING_STATE:
            return state.merge({
                manageBookingState: action.payload.state,
            });
        case actionTypes.LOGOUT_STATE:
            return state.merge({
                logoutState: false,
            });
        case actionTypes.UPDATE_ENVIRONMENT:
            return state.merge({
                environment: action.payload.environment,
            });
        default:
            return state;
    }
};
