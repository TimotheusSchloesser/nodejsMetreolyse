
'use strict'
const MongoClient = require('mongodb').MongoClient; 

const database = function(command, entry){
    const mongoUrl = 'mongodb://localhost:27017/',
        client = new MongoClient(mongoUrl),
        dbName = 'traindiary'

       

        const main = async function(command){
        await client.connect();
        console.log('Connected successfully to server')
        const db = client.db(dbName)
        const collection = db.collection('dates')
        goForIt(entry)
        return command;
        }


        const goForIt = async function(entry){
            const client = new MongoClient(mongoUrl),
             db = client.db(dbName),
            collection = db.collection('dates')
            console.log(entry)

                try {
                
                    if(command == 'insertResult') {
                        const insertResult = await collection.insertMany(entry)
                        console.log('Inserted documents =>', insertResult)
    
                    }else if(command == 'findResult') {
                        const findResult = await collection.find({}).toArray() // {} = all
                        console.log('Found documents =>', findResult);
                    }    
                    else if(command == 'findOne') {
                        await collection.findOne(entry) // {} = all
                        console.log('Found document =>', entry)
                } else if(command == 'insertOne') {  
                const insertOne = await collection.insertOne(entry, function(err, res) {
                    if (err) throw err;
                    console.log("Document inserted");
                    // close the connection to db when you are done with it
                    // db.close(); 
                })
            }
                    else if(command == 'filteredDocs') {
                        const filteredDocs = await collection.find(entry).toArray()
                        console.log('Found documents filtered by '+ entry.stringify() +' =>', filteredDocs);
                }
                else if(command == 'updateResult') {
                        const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
                        console.log('Updated documents =>', updateResult);
                    }
                    else if(command == 'deleteResult') {
                        const deleteResult = await collection.deleteMany();
                        console.log('Deleted documents =>'+ JSON.stringify(entry), deleteResult);
                    }
                    else if(command == 'indexName') {
                        const indexName = await collection.createIndex({ a: 1 });
                        console.log('index name =', indexName);
                    }
                    else if(command == 'getIndexes') {
                        const getIndexes = await collection.getIndexes();
                        console.log('index name =', getIndexes);
                    }
                    else if(command == undefined) {
                        console.log("command not found!")
                    }
                } catch(error){
                    if (error instanceof MongoServerError) {
                        console.log(`Error worth logging: ${error}`); // special case for some reason
                      }
                      throw error; // still want to crash 
                }
            }

            main(command)
            .then(console.log)
            .catch(console.error)
            .finally(() => client.close());
    

            
}

module.exports = database






// 'use strict'
// const MongoClient = require('mongodb').MongoClient; 

// const database = function(command, entry){
//         var mongoUrl = 'mongodb://localhost:27017/';
//         // this.entry = entry
//         const client = new MongoClient(mongoUrl);

//         // Database Name
//         const dbName = 'traindiary';
//         // entry = '{ _id: new ObjectId("62b5a087fb128913651248ba"), a: 2 }'
//         const main = async function(command, entry){
//             await entry
//         // Use connect method to connect to the server
//         await client.connect();
//         console.log('Connected successfully to server');
//         const db = client.db('traindiary');
//         const collection = db.collection('dates');
        
//         try {
            
//             if(command == 'insertResult') {
//                 const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
//                 console.log('Inserted documents =>', insertResult);
//             }else if(command == 'findResult') {
//                 const findResult = await collection.find({}).toArray(); // {} = all
//                 console.log('Found documents =>', findResult);
//             }    
//             else if(command == 'filteredDocs') {
//                 const filteredDocs = await collection.find(entry).toArray();
//                 console.log('Found documents filtered by '+ entry +' =>', filteredDocs);
//         }
//         else if(command == 'updateResult') {
//                 const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
//                 console.log('Updated documents =>', updateResult);
//             }
//             else if(command == 'deleteResult') {
//                 const deleteResult = await collection.deleteMany(entry);
//                 console.log('Deleted documents =>'+ entry, deleteResult);
//             }
//             else if(command == 'indexName') {
//                 const indexName = await collection.createIndex({ a: 1 });
//                 console.log('index name =', indexName);
//             }
//             else if(command == undefined) {
//                 console.log("command not found!")
//             }
//         } catch(error){
//             if (error instanceof MongoServerError) {
//                 console.log(`Error worth logging: ${error}`); // special case for some reason
//               }
//               throw error; // still want to crash 
//         }
//         return command;
//         }

//         main(command)
//             .then(console.log)
//             .catch(console.error)
//             .finally(() => client.close());

            
// }
// module.exports = database