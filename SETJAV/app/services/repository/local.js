import { database, MODEL_TYPES } from '../';

export const getActiveUser = () =>
    database.getDocument(MODEL_TYPES.User, { filter: [{ field: 'active', value: 1 }] });

export const setActiveUser = user =>
    database.upsetDocuments(MODEL_TYPES.User, new MODEL_TYPES.User(user, false));

export const deleteActiveUser = () =>
    database.deleteDocuments(MODEL_TYPES.User, { filter: [{ field: 'active', value: 1 }] });
