//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b08c8887bd0f4d460fba3d5")
    // },{
    //     $set:{
    //         completed:true
    //     }
    // }, {
    //     returnOriginal:false
    // }).then( (result) => {
    //     console.log(result);
    // });
     
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b08ca587bd0f4d460fba491")
    }, {
        $set:{
            name:'lee'
        },
        $inc:{
            age: -1
        }
    }, {
        returnOriginal:false
    }).then( (result) => {
        console.log(result);
    });

    client.close();
});