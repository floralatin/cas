
export default {
    debug: true,
    port: 3000,
    mongo: {
        // !!! Note that mongodb driver drops the dbName prop when it sees authSource
        uri: 'mongodb://localhost:27017',
        options: {
            authSource: 'admin',
            maxIdleTimeMS: 30000,
            minPoolSize: 1
        }
    },
};
