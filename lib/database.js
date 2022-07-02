'use strict'
const MongoClient = require('mongodb').MongoClient; 

var result
const database = function(command, entry){
    const mongoUrl = 'mongodb://localhost:27017/',
        client = new MongoClient(mongoUrl)
        
       

        const main = async function(command, entry){
        await client.connect();
        console.log('Connected successfully to server')
        const dbName = 'traindiary'
        const db = client.db(dbName)
        const collection = db.collection('dates')
        
          

                try {
                
                    if(command == 'insertResult') {
                        const insertResult = await collection.insertMany([entry])
                        console.log('Inserted documents =>', insertResult)
    
                    }else if(command == 'findResults') {
                        const findResult = await collection.find({}).toArray() // {} = all
                        console.log('Found documents =>', findResult);
                        result = findResult
                    }    
                    else if(command == 'deleteResult') {
                        const deleteResult = await collection.deleteMany(entry)
                        console.log('Deleted documents =>'+ JSON.stringify(entry), deleteResult);
                    }
                    else if(command == 'deleteOne') {
                        await collection.deleteOne({entry}) // {} = all
                        console.log('delete document =>', entry)
                    }
                    else if(command == 'remove') {
                        await collection.deleteMany({})
                        console.log('Removed')
                    } else if(command == 'insertOne') {  
                        const insertOne = await collection.insertOne({entry})
                        console.log('Inserted documents =>', insertOne)

                    } else if(command == undefined) {
                        console.log("command not found! - " + command)
                    }
                   
                } catch(error){
                    if (error instanceof MongoServerError) {
                        console.log(`Error worth logging: ${error}`); // special case for some reason
                      }
                      throw error; // still want to crash 
                }
            }

            main(command, entry)
            .then(console.log)
            .catch(console.error)
            .finally(() => client.close());
    
            console.log(result)
            return result

            
}

module.exports = database






