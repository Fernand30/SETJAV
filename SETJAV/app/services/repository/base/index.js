import Rx from 'rxjs/Rx';
import { database } from '../../../services';

export const subscribeToDocumentChange = (model, id) => {
    return database.getDocument(model, {
        filter: [{
            field: 'id',
            value: id,
        }],
    })
        .mergeMap(doc => Rx.Observable.create((obs) => {
            obs.next(doc);

            database.subscribeToChangeFeed(model)
                .map((changes) => changes.filter(c => c.id === id))
                .filter(changes => changes.length === 1)
                .subscribe(changes => obs.next(changes[0]), err => obs.error(err));
        }));
};

export const subscribeToCollectionChange = model =>
    database.getDocuments(model)
        .mergeMap(docs => Rx.Observable.create((obs) => {
            obs.next(docs);

            database.subscribeToChangeFeed(model)
                .filter(changes => changes.length > 0)
                .subscribe((changes) => obs.next(changes), err => obs.error(err));
        }));
