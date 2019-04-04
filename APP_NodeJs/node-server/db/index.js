const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const database_url = 'mongodb://localhost:27017';
//表名
const database_name = 'ccd';

async function connect() {
    let client = await MongoClient.connect(database_url, {
        useNewUrlParser: true
    });
    let db = client.db(database_name);
    return {
        db,
        client
    };
}

exports.insert = async (colName, data) => {

    let {
        db,
        client
    } = await connect();

    let collection = db.collection(colName);
    let res = await collection[Array.isArray(data) ? 'insertMany' : 'insertOne'](data);

    client.close();

    return res;
}

exports.delete = async (colName, query) => {

    let {
        db,
        client
    } = await connect();

    let collection = db.collection(colName);
    let res = await collection['deleteMany'](query);

    client.close();

    return res;
}

exports.update = async (colName, query, newData) => {

    let {
        db,
        client
    } = await connect();

    let collection = db.collection(colName);
    let res = await collection['updateMany'](query, newData);

    client.close();

    return res;
}

exports.find = async (colName, query, qty, limit) => {

    let {
        db,
        client
    } = await connect();
    //db.collection(colName)相当于MongoDB的db.user
    let collection = db.collection(colName);
    if (limit) {
        let res2 = await collection.find(query);
        let res3 = await res2.skip(qty).limit(limit).toArray();
        client.close();
        return res3;
    } else {
        let res = await collection.find(query).toArray();
        client.close();

        return res;
    }

}