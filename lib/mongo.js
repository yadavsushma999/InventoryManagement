require("dotenv").config({ path: "./.env" }); // Explicit path
// ✅ required to load .env

const { MongoClient } = require("mongodb");
const uri = process.env.DATABASE_URL;
const client = new MongoClient(uri);

let dbInstance;

async function getMongoDb() {
    if (!dbInstance) {
        await client.connect();
        dbInstance = client.db(); // default DB from URI
    }
    return dbInstance;
}

module.exports = { getMongoDb };
