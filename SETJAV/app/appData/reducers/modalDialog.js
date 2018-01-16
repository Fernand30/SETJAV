import { fromJS } from 'immutable';
import {
    OPEN_DIALOG, OPEN_SPINNER, DIALOG_TYPES, CLOSE_DIALOG, CLOSE_SPINNER,
} from '../constants/modalDialog';

const initialState = fromJS({
    isDialogOpen: false,
    isSpinnerOpen: false,
    height: 180,
    title: null,
    message: null,
    animationDuration: 400,
    messageStyle: null,
    acceptFunc: null,
    cancelFunc: null,
    dialogType: DIALOG_TYPES.MESSAGE,
});

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG:
            return state.merge({
                isDialogOpen: true,
                isSpinnerOpen: false,
                height: action.payload.height,
                title: action.payload.title,
                animationDuration: action.payload.animationDuration || 400,
                message: action.payload.message,
                messageStyle: action.payload.messageStyle || null,
                acceptFunc: action.payload.acceptFunc || null,
                cancelFunc: action.payload.cancelFunc || null,
                dialogType: action.payload.dialogType || DIALOG_TYPES.MESSAGE,
            });
        case OPEN_SPINNER:
            return state.merge({
                isDialogOpen: false,
                isSpinnerOpen: true,
                height: action.payload.height,
                title: null,
                message: action.payload.message,
                messageStyle: action.payload.messageStyle || null,
                acceptFunc: null,
                cancelFunc: action.payload.cancelFunc || null,
                dialogType: DIALOG_TYPES.SPINNER,
            });
        case CLOSE_DIALOG:
            return state.merge({
                isDialogOpen: false,
            });
        case CLOSE_SPINNER:
            return state.merge({
                isSpinnerOpen: false,
            });
        default:
            return state;
    }
};
