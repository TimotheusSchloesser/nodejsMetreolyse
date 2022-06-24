'use strict'
const MongoClient = require('mongodb').MongoClient; 

const database = function(command){
        var mongoUrl = 'mongodb://localhost:27017/';
        
        const client = new MongoClient(mongoUrl);

        // Database Name
        const dbName = 'traindiary';
        
        const main = async function(command)  {
        // Use connect method to connect to the server
        await client.connect();
        console.log('Connected successfully to server');
        const db = client.db('traindiary');
        const collection = db.collection('dates');
        
        try {
            
            if(command == 'insertResult') {
                const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
                console.log('Inserted documents =>', insertResult);
            }
            if(command == 'findResult') {
                const findResult = await collection.find({}).toArray();
                console.log('Found documents =>', findResult);
            }    
            if(command == 'filteredDocs') {
                const filteredDocs = await collection.find({ a: 3 }).toArray();
                console.log('Found documents filtered by { a: 3 } =>', filteredDocs);
        }
            if(command == 'updateResult') {
                const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
                console.log('Updated documents =>', updateResult);
            }
            if(command == 'deleteResult') {
                const deleteResult = await collection.deleteMany({ a: 3 });
                console.log('Deleted documents =>', deleteResult);
            }
            if(command == 'indexName') {
                const indexName = await collection.createIndex({ a: 1 });
                console.log('index name =', indexName);
            }
            if(command == undefined) {
                console.log("command not found!")
            }
        } catch(error){
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`); // special case for some reason
              }
              throw error; // still want to crash 
        }
        return command;
        }

        main(command)
            .then(console.log)
            .catch(console.error)
            .finally(() => client.close());

            
}
module.exports = database


//     const entrys = db.collection('dates')
    
    
//     // entrys.insertOne(testEntry, err => {
//     //     if(err) {
//     //         console.log('failed to write in DB')
//     //         process.exit(1)
//     //     }
//     //     console.log('Test sucessfully')
//     // })

//     entrys.find({date: '1.1.11'}).toArray((err, documents) => {
//         if(err) {
//            console.log('failed to find!')
//            process.exit(1) 
//         }
//         console.log(documents)
//         let dbTestDate = JSON.stringify(documents)
//         // app.get('/db', function (req, res) {
            
//         //  });
//         client.close()
//     })

//         entrys.find({date: '1.1.11'}).toArray((err, documents) => {
//         if(err) {
//            console.log('failed to find!')
//            process.exit(1) 
//         }
//         console.log(documents)
//     })

//     database = db
//     db.collection('dates').findOne({}, function (findErr, result) {
//         if (findErr) throw findErr;
//         console.log(result.date);
//         client.close();
//     });
// });