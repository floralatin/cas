import * as mongoDB from "mongodb";

const Config = {
    debug: true,
    port: 3000,
    host: "127.0.0.1",
    mongo: {
        // !!! Note that mongodb driver drops the dbName prop when it sees authSource
        url: 'mongodb://127.0.0.1:27017',
        options: {
            maxIdleTimeMS: 30000,
            minPoolSize: 1,
            useUnifiedTopology: false,
            useNewUrlParser: true,
            directConnection: true
        }
    },
};

export const collections: { user?: mongoDB.Collection } = {

}

export async function connectToDatabase () {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(Config.mongo.url, Config.mongo.options);

    try {
        await client.connect();
        console.log(`Successfully connected !`)
    } catch (err: unknown) {
        this.logger.error('Mongo connection failed', { err });
    }
        
    const db: mongoDB.Db = client.db("cas");
    db.createCollection('user');
    const userCollection: mongoDB.Collection = db.collection('user');
 
    collections.user = userCollection;
       
    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${userCollection.collectionName}`);
 }