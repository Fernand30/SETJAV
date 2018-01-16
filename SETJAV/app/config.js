const IS_DEVELOPMENT = true;

export const config = {
    API_VERSION: '2',
    IS_DEVELOPMENT: IS_DEVELOPMENT, // eslint-disable-line

    BASE_API: 'http://localhost:8000/api',
    DATA_SYNC_API: 'http://localhost:8003/api',

    MAP_BOX_API_TOKEN: '',
    SOCKETS: {
        MESSAGES: {
            HOST: 'localhost:8004',
            PORT: 443,
            APP_NAME: 'set',
            SECURE: true,
        },
    },
};
