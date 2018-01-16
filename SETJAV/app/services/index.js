import api from './api';
import database, { MODEL_TYPES } from './database';
import device from './device';
import repository from './repository';

const user = {
    userKey: () => database.getUserKey(),
};

export {
    api,
    database,
    device,
    MODEL_TYPES,
    repository,
    user,
};
