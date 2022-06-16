'use strict'

// const mongo = require('mongodb')
var MongoClient = require('mongodb').MongoClient;
// const MongoClient = mongo.MongoClient;



const database = {

    initialize (url, callback) {
        MongoClient.connect(url, (err, database) => {
            if (err) {
                return callback(err)
            }
            const traindiary = database.collection('traindiary');
            // const alias = client.collection('alias')
            this.traindiary = traindiary
            console.log("Connected to Mongo")
            callback(null)
        })
    },
    
    showEntry (alias, callback) {
        this.traindiary.findOne({alias}, (err, traindiary) => {
                if(err) {
                   return callback(err)
                }
                if (!traindiary) {
                    return callback(new Error('alias not found!'))
                }
                callback(null, traindiary)
                // console.log(documents)
            })
    },

    showEntries (callback) {
        if(!callback){
            throw new Error('Callback missing!')
        }
        this.traindiary.find().toArray((err, traindiary) => {
            if(err){
                return callback(err)
            }

            callback(null, traindiary)
        })
    },

    createEntry (alias, target, callback) {
        if(!alias) {
            throw new Error('alias missing')
         }
         if (!target) {
            throw new Error('Target missing')
         }
         if (!callback) {
            throw new Error('Callback missing')
         }
         const traindiary = {
            alias,
            id : date.now(),
            target: target,
            statistics: {
                date: date.now(),
                bpm: 150
            }
        }
        this.traindiary.insertOne(traindiary, err => {
          if(err) {  
            return callback(err)
            }
          callback(null)
        })
    },
    invokeTraindiary(id, callback){
        if (!id) {
            throw new Error('ID missing')
         }
         if (!callback) {
            throw new Error('Callback missing')
         }

         this.traindiary.updateOne({ id }, {$inc: { 'statistics.invoked' : 1}})
        , err => {
            if(err){
               return callback(err) 
            }
            callback(null)
        }}
}

//     const entrys = db.collection('alias')
//  var doc
 
//  entrys.insertOne(testEntry, err => {
//      if(err) {
//          console.log('failed to write in DB')
//          process.exit(1)
//      }
//      console.log('Test sucessfully')
//  }) 
//  }

module.exports = database

// var databas;





    // var db = 
    
    

    

    //     entrys.find({date: '1.1.11'}).toArray((err, documents) => {
    //     if(err) {
    //        console.log('failed to find!')
    //        process.exit(1) 
    //     }
    //     console.log(documents)
    // })

    // function dbTest() {
    //     entrys.find({date: '1.1.11'}).toArray((err, documents) => {
    //         if(err) {
    //            console.log('failed to find!')
    //            process.exit(1) 
    //         }
    //         console.log(documents)
    //         doc = documents

    //     })
        
    // }
    // var doc = dbTest()
    // databas = db
    // db.collection('alias').findOne({}, function (findErr, result) {
    //     if (findErr) throw findErr;
    //     console.log(result.date);
    //     client.close();
    // });
// });