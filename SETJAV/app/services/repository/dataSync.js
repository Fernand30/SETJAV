import { database, MODEL_TYPES } from '../';

export const getSyncSequence = bookingReference =>
    database.getDocument(
        MODEL_TYPES.Document,
        { filter: [{ field: 'id', value: `${database.getUserKey()}_dataSync_${bookingReference}`.toLowerCase() }] },
    );

export const saveSyncSequence = (bookingReference, sequence) => {
    const data = {
        id: `${database.getUserKey()}_dataSync_${bookingReference}`.toLowerCase(),
        bookingReference,
        lastSequence: sequence,
    };

    return database.upsetDocuments(MODEL_TYPES.Document, new MODEL_TYPES.Document(data, 'dataSync', true));
};
