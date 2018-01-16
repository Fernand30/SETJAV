import Rx from 'rxjs/Rx';
import async from 'async';
import SQLite from 'react-native-sqlite-storage';
import models from './models';

let sqlDb = null;
let userKey = null;
let changeFeed$ = null;
let changeFeedPublisher$ = null;

const ERROR_REWRITE_TIMEOUT = 200;

const initialise = () =>
    Rx.Observable.create((obs) => {
        changeFeed$ = new Rx.Subject();
        changeFeedPublisher$ = changeFeed$.publish().refCount();

        sqlDb = SQLite.openDatabase({ name: 'flexitravel.db', location: 'default' }, () => {
            sqlDb.transaction((tx) => {
                tx.executeSql(models.Document.createSchema);
                tx.executeSql(models.User.createSchema);
            }, (error) => {
                obs.error(error);
            }, () => {
                obs.next();
            });
        }, (err) => {
            obs.error(err);
        });
    });

const queryBuilder = (inputQuery, inputParams, includeUserKey) => {
    if (!inputParams) throw new Error('Missing input parameters for query');

    let query = inputQuery;
    let queryParams = [];

    if (!inputParams.filter) inputParams.filter = [];
    if (!inputParams.data) inputParams.data = [];

    if (includeUserKey) {
        if (!inputParams.filter.find(f => f.field === 'userKey')) inputParams.filter.push({ field: 'userKey', value: userKey });
        if (!inputParams.data.find(f => f.field === 'userKey')) inputParams.data.push({ field: 'userKey', value: userKey });
    }

    if (query.toUpperCase().indexOf('SELECT') > -1 && Array.isArray(inputParams.filter) && inputParams.filter.length > 0) {
        query = `${query} WHERE ${inputParams.filter.map(parameter => ` ${parameter.field} = ? `).join(` ${inputParams.operator ? inputParams.operator : 'AND'} `)}`;
        queryParams = inputParams.filter.map(parameter => parameter.value);
    }

    if (query.toUpperCase().indexOf('DELETE') > -1 && Array.isArray(inputParams.filter) && inputParams.filter.length > 0) {
        query = `${query} WHERE ${inputParams.filter.map(parameter => ` ${parameter.field} = ? `).join(` ${inputParams.operator ? inputParams.operator : 'AND'} `)}`;
        queryParams = inputParams.filter.map(parameter => parameter.value);
    }

    if (query.toUpperCase().indexOf('INSERT') > -1 && Array.isArray(inputParams.data)) {
        query = `${query} (${inputParams.data.map(parameter => parameter.field).join(', ')}) VALUES (${inputParams.data.map(() => '?').join(',')})`;
        queryParams = inputParams.data.map(parameter => parameter.value);
    }

    if (query.toUpperCase().indexOf('UPDATE') > -1 && Array.isArray(inputParams.filter) && Array.isArray(inputParams.data)) {
        query = `${query} SET ${inputParams.data.map(parameter => ` ${parameter.field} = ? `).join(', ')} WHERE ${inputParams.filter.map(parameter => ` ${parameter.field} = ? `).join(` ${inputParams.operator ? inputParams.operator : 'AND'} `)}`;
        queryParams = inputParams.data.map(parameter => parameter.value);

        inputParams.filter.forEach((parameter) => {
            queryParams.push(parameter.value);
        });
    }

    return {
        query: query.trim(),
        queryParams,
    };
};

const setUserKey = key => userKey = key; // eslint-disable-line
const getUserKey = () => userKey;

const query = (query = null, params = []) =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) obs.error('Database has now been defined');

        sqlDb.transaction((tx) => {
            tx.executeSql(query, params, (t, results) => {
                const rows = results.rows.raw();
                obs.next(rows);
            }, (t, err) => {
                obs.error(err);
            });
        });
    });

const getDocument = (model, params = {}) =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) obs.error('Database has now been defined');

        const { query, queryParams } = queryBuilder(`SELECT * FROM ${model.tableName}`, params, model.includeUserKey);
        sqlDb.transaction((tx) => {
            tx.executeSql(query, queryParams, (t, results) => {
                const rows = results.rows.raw();
                obs.next((results.rows.length > 0 && rows[0].data)
                    ? JSON.parse(rows[0].data)
                    : null);
            }, (t, err) => {
                obs.error(err);
            });
        });
    });

const getDocuments = (model, params = {}) =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) obs.error('Database has now been defined');

        const { query, queryParams } = queryBuilder(`SELECT * FROM ${model.tableName}`, params, model.includeUserKey);
        sqlDb.transaction((tx) => {
            tx.executeSql(query, queryParams, (t, results) => {
                const rows = results.rows.raw();
                obs.next(rows.map(row => row.data ? JSON.parse(row.data) : null));
            }, (t, err) => {
                obs.error(err);
            });
        });
    });

const subscribeToChangeFeed = modelName =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) obs.error('Database has now been defined');
        if (!changeFeedPublisher$) obs.error('ChangeFeed has now been defined');

        changeFeedPublisher$
            .filter(change => change.tableName === modelName.tableName)
            .subscribe((change) => {
                obs.next(change.data);
            });
    });

const unSubscribeAllListeners = () =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) obs.error('Database has now been defined');

        if (changeFeed$) changeFeed$.unsubscribe();
    });

const insertDocument = (tx, tableName, document, includeUserKey, callback, errorCallback) => {
    const { query, queryParams } = queryBuilder(`INSERT INTO ${tableName}`, document.updateParams, includeUserKey);
    tx.executeSql(query, queryParams, callback, errorCallback);
};

const updateDocument = (tx, tableName, document, includeUserKey, callback, errorCallback) => {
    const { query, queryParams } = queryBuilder(`UPDATE ${tableName}`, document.updateParams, includeUserKey);
    tx.executeSql(query, queryParams, callback, errorCallback);
};

const upsertDocuments = (model, documents) =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) return obs.error('Database has now been defined');
        if (!userKey) return obs.error('UserKey has now been set for the database');

        if (!Array.isArray(documents)) documents = [documents];
        if (documents.length === 0) return obs.next();

        sqlDb.transaction((tx) => {
            const changedRows = [];

            async.everySeries(documents, (doc, callback) => {
                if (doc.setUserKey) doc.setUserKey(userKey);

                const { query, queryParams } = queryBuilder(`SELECT * FROM ${model.tableName}`, doc.updateParams, model.includeUserKey);
                tx.executeSql(query, queryParams, (t1, results) => {
                    if (results.rows.length > 0) {
                        updateDocument(tx, model.tableName, doc, model.includeUserKey, () => {
                            changedRows.push(doc.toJsObject);
                            callback(null, true);
                        }, (t2, err) => {
                            callback(err);
                        });
                    } else {
                        insertDocument(tx, model.tableName, doc, model.includeUserKey, () => {
                            changedRows.push(doc.toJsObject);
                            callback(null, true);
                        }, (t2, err) => {
                            callback(err);
                        });
                    }
                }, (t1, err) => callback(err));
            }, (err) => {
                if (err) return obs.error(err);

                changeFeed$.next({ tableName: model.tableName, data: changedRows });
                return obs.next();
            });
        });
    })
        .retryWhen(e => e.scan((errorCount, err) => {
            if (errorCount >= 10) throw err;
            return errorCount + 1;
        }, 0).delay(ERROR_REWRITE_TIMEOUT));

const deleteDocuments = (model, params = {}) =>
    Rx.Observable.create((obs) => {
        if (!sqlDb) return obs.error('Database has now been defined');

        const { query, queryParams } = queryBuilder(`DELETE FROM ${model.tableName}`, params, model.includeUserKey);
        sqlDb.transaction((tx) => {
            tx.executeSql(query, queryParams, () => {
                obs.next(true);
            }, (t, err) => {
                obs.error(err);
            });
        });
    })
        .retryWhen(e => e.scan((errorCount, err) => {
            if (errorCount >= 10) throw err;
            return errorCount + 1;
        }, 0).delay(ERROR_REWRITE_TIMEOUT));

export const MODEL_TYPES = models;

export default {
    initialise,
    getUserKey,
    setUserKey,
    query,
    subscribeToChangeFeed,
    unSubscribeAllListeners,
    getDocument,
    getDocuments,
    upsetDocuments: upsertDocuments,
    deleteDocuments,
};
