//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongdDB server');

    const db = client.db('TodoApp');

    db.collection('Users').find({name: 'android'}).toArray().then( (doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
    });
    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('unable to fetch todos',err);
    // });
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert todo ',err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    // db.collection('Users').insertOne({
    //     name: 'android',
    //     age: 20,
    //     location: 'Taiwan'
    // },(err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert users', err)
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //client.close();
});