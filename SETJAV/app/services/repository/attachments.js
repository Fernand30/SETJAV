import Rx from 'rxjs/Rx';
import RNFS from 'react-native-fs';
import eachOfLimit from 'async/eachOfLimit';
import { database, repository, MODEL_TYPES } from '../';
import { config } from '../../config';

let attachment$ = null;
let attachmentChanges = null;
const progress$ = new Rx.Subject();

const compareVersion = (localDoc, files) =>
    Rx.Observable.create((obs) => {
        const changes = [];
        const existingFiles = (localDoc && localDoc.files) ? localDoc.files : [];
        files.forEach((file) => {
            const exists = existingFiles.find(f =>
                f.id.toLowerCase() === file.id.toLowerCase() && f.revision >= file.revision);

            if (!exists) changes.push(file);
        });

        obs.next(changes);
    });

const download = (localDoc, changes) =>
    repository.local.getActiveUser()
        .mergeMap(user => Rx.Observable.create((obs) => {
            if (!changes || changes.length === 0) return obs.next(changes);

            progress$.next({
                progress: 0,
                total: changes.length,
            });

            let processedChanges = 0;
            eachOfLimit(changes, 2, (change, key, callback) => {
                change.url = change.url.replace('http:', 'https:');
                const fromUrl = `${config.BASE_API}/apt/getAsset/${encodeURIComponent(change.url)}`;
                const downloadFileOptions = {
                    fromUrl,
                    toFile: `${RNFS.DocumentDirectoryPath}/${change.id}.${change.type}`,
                    background: false,
                    headers: {
                        'x-auth-token': user.token,
                    },
                };

                RNFS.downloadFile(downloadFileOptions)
                    .promise
                    .then(() => {
                        localDoc.files.push(change);

                        processedChanges++; // eslint-disable-line
                        progress$.next({
                            progress: processedChanges,
                            total: changes.length,
                        });

                        callback();
                    })
                    .catch(err => callback(err));
            }, (err) => {
                if (err) return obs.error(err);

                database.upsetDocuments(MODEL_TYPES.Document, new MODEL_TYPES.Document(localDoc, 'attachments', true))
                    .map(() => changes)
                    .subscribe(obs);
            });
        }));

const process = (bookingReference, locallyCachedDocId, destinationFolder) => {
    const defaultLocalDoc = { id: locallyCachedDocId, files: [], timestamp: new Date() };

    return database.getDocument(MODEL_TYPES.Document, { filter: [{ field: 'id', value: `${database.getUserKey()}_booking_${bookingReference}`.toLowerCase() }] })
        .filter(doc =>
            doc !== null &&
            doc.externalFiles !== null &&
            Array.isArray(doc.externalFiles))
        .map(doc => doc.externalFiles)
        .mergeMap(files =>
            database.getDocument(MODEL_TYPES.Document, { filter: [{ field: 'id', value: locallyCachedDocId }] })
                .map(localDoc => localDoc || defaultLocalDoc)
                .mergeMap(localDoc =>
                    compareVersion(localDoc, files), (a, b) => ({ localDoc: a, changes: b }))
                .mergeMap(data => download(data.localDoc, data.changes, destinationFolder)));
};

export const attachmentChangeStream = () => {
    if (!attachmentChanges) attachmentChanges = new Rx.Subject();
    return attachmentChanges;
};

export const downloadAttachments = (bookingReference) => {
    if (attachment$) attachment$.unsubscribe();

    attachment$ = process(bookingReference, 'booking_attachments', 'backgrounds')
        .retryWhen(error => error.delay(3000 /* ms */))
        .subscribe(() => attachmentChanges.next());
};

export const downloadProcess = () => progress$.publish().refCount();

export const unsubscribe = () => {
    if (attachment$) attachment$.unsubscribe();
    attachmentChanges = null;
};
