import { combineReducers } from 'redux-immutable';

import * as modalDialogConstants from '../constants/modalDialog';
import * as systemConstants from '../constants/system';

import modalDialog from './modalDialog';
import system from './system';

export default combineReducers({
    [modalDialogConstants.NAME]: modalDialog,
    [systemConstants.NAME]: system,
});
