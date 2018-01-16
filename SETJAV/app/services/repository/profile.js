import { database, MODEL_TYPES } from '../';
import { subscribeToDocumentChange } from './base';

let avatar$ = null;
let profile$ = null;

export const subscribeToAvatar = () => {
    if (!avatar$) avatar$ = subscribeToDocumentChange(MODEL_TYPES.Document, `${database.getUserKey()}_avatar`).publishReplay(1).refCount();
    return avatar$;
};

export const subscribeToProfile = () => {
    if (!profile$) profile$ = subscribeToDocumentChange(MODEL_TYPES.Document, `${database.getUserKey()}_profile`).publishReplay(1).refCount();
    return profile$;
};

export const saveProfile = (profile, synced = false) =>
    database.upsetDocuments(MODEL_TYPES.Document, new MODEL_TYPES.Document(profile, 'profile', synced));

export const saveAvatar = avatar =>
    database.upsetDocuments(MODEL_TYPES.Document, new MODEL_TYPES.Document(avatar, 'avatar', true));

export const saveAvatarImage = image =>
    database.getDocument(MODEL_TYPES.Document, { filter: [{ field: 'id', value: `${database.getUserKey()}_avatar` }] })
        .mergeMap((avatar) => {
            if (!avatar) avatar = {};
            avatar.data = image;
            return database.upsetDocuments(MODEL_TYPES.Document, new MODEL_TYPES.Document(avatar, 'avatar', false));
        });

export const unsubscribe = () => {
    avatar$ = null;
    profile$ = null;
};
