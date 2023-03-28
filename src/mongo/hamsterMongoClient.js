import { MongoClient } from "mongodb";

let db = undefined;
const appDatabaseName = "hamster-project";
const username = "JosefineLi";
const password = "test417512";

export function fetchCollection(name) {
    return fetchDatabase().collection(name);
}

function fetchDatabase () {
    if (db != undefined) {
        return db;
    }

    const url = `mongodb+srv://${username}:${password}@fe22-cluster.bj36kwm.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(url);

    db = client.db(appDatabaseName);

    return db;
}