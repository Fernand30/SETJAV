import * as actionTypes from './constants';

export const fetchData = () => ({ type: actionTypes.FETCH_DATA });
export const fetchDataCompleted = data=>
    ({ type: actionTypes.FETCH_DATA_COMPLETED, payload: { data } });

export const fetchDataError = errorMessage =>
    ({ type: actionTypes.FETCH_DATA_ERROR, payload: { errorMessage } });
