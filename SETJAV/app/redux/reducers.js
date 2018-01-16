import { combineReducers } from 'redux-immutable';

import * as applicationData from '../appData';
import * as brands from '../features/example';
import * as loading from '../features/loading';
import * as home from '../features/home';
import * as location from '../features/location';
import * as message from '../features/message';
import * as settings from '../features/settings';
import * as menu from '../features/menu';
import * as intinerary from '../features/intinerary';

export const createReducer = () => combineReducers({
    [applicationData.constants.NAME]: applicationData.reducer,
    [brands.FEATURE_NAME]: brands.reducer,
    [loading.FEATURE_NAME]: loading.reducer,
    [home.FEATURE_NAME]: home.reducer,
    [location.FEATURE_NAME]: location.reducer,
    [message.FEATURE_NAME]: message.reducer,
    [menu.FEATURE_NAME]: menu.reducer,
    [settings.FEATURE_NAME]: settings.reducer,
    [intinerary.FEATURE_NAME]: intinerary.reducer,
});
