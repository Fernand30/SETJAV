import * as actionTypes from '../constants/system';

const resetSystem = () => ({ type: actionTypes.RESET_SYSTEM });

export const manageBookingState = state =>
    ({ type: actionTypes.MANAGE_BOOKING_STATE, payload: { state } });

export const updateEnvironment = environment =>
    ({ type: actionTypes.UPDATE_ENVIRONMENT, payload: { environment } });

export const logoutState = () => ({ type: actionTypes.LOGOUT_STATE });

export const unsubscribe = dispatch => dispatch(resetSystem());
