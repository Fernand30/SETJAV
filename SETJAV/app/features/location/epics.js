import Rx from 'rxjs/Rx';
import { combineEpics } from 'redux-observable';
import * as actionTypes from './constants';
import { fetchDataCompleted, fetchDataError } from './actions';

import mockData from './_mockData';

const { Observable } = Rx;

const fetchData = action$ =>
    action$.ofType(actionTypes.FETCH_DATA)
        .mergeMap(() => {
            console.log('data');
            return Observable.of(mockData)
                .map(data => fetchDataCompleted(data))
                .catch(err => fetchDataError(err));
        });

export default combineEpics(fetchData);  // comma separate adding more epics
