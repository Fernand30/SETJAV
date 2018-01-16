import * as actionTypes from '../constants/modalDialog';

export const openDialog = modal => ({ type: actionTypes.OPEN_DIALOG, payload: { ...modal } });
export const openSpinner = modal => ({ type: actionTypes.OPEN_SPINNER, payload: { ...modal } });

export const closeDialog = () => ({ type: actionTypes.CLOSE_DIALOG });
export const closeSpinner = () => ({ type: actionTypes.CLOSE_SPINNER });
