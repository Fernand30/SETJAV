import Rx from 'rxjs/Rx';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

import { exampleEpics } from '../features/example';
import { loading } from '../features/loading';
import { home } from '../features/home';
import { location } from '../features/location';
import { menu } from '../features/menu';
import { message } from '../features/message';
import { intinerary } from '../features/intinerary';
import { settings } from '../features/settings';

const epicRegistry = [exampleEpics, loading, home, location, message, settings, menu, intinerary];
const asyncEpic$ = new Rx.BehaviorSubject(combineEpics(...epicRegistry));

const rootEpic = (action$, store) =>
    asyncEpic$.mergeMap(epic => epic(action$, store));

export const epicMiddleware = createEpicMiddleware(rootEpic);
