'use strict'

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient;



const database = {

    initialize (url, callback) {
        MongoClient.connect(url, (err, client) => {
            if (err) {
                return callback(err)
            }
            client = client.db('traindiary');
            const dates = client.collection('dates')
            this.dates = dates
            console.log("Connected to Mongo")
            callback(null)
        })
    },
    
    showEntries (dates, callback) {
        this.dates.find(dates).toArray((err, documents) => {
                if(err) {
                   return callback(err)
                }
                callback(null, dates)
                console.log(documents)
            })
    }
}

//     const entrys = db.collection('dates')
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
    // db.collection('dates').findOne({}, function (findErr, result) {
    //     if (findErr) throw findErr;
    //     console.log(result.date);
    //     client.close();
    // });
// });