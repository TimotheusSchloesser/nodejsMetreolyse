'use strict'
import { getBpm } from './metronomControl.js'
import { statistics } from './input.js'
import { getTimeStamp } from './getTimeStamp.js'



// From Data to JSON
export function traindiaryJSON() {
    const statistic = statistics() / 10
    const jsonTD = [
        {"_ID" : Date.now(),
        "date": getTimeStamp(),
        "bpm": getBpm(),
        "accuracy": statistic}]
    
    return jsonTD
}








// db.createCollection("students", {
//     validator: {
//        $jsonSchema: {
//           bsonType: "object",
//           required: [ "name", "year", "major", "address" ],
//           properties: {
//              name: {
//                 bsonType: "string",
//                 description: "must be a string and is required"
//              },
//              year: {
//                 bsonType: "int",
//                 minimum: 2017,
//                 maximum: 3017,
//                 description: "must be an integer in [ 2017, 3017 ] and is required"
//              },
//              major: {
//                 enum: [ "Math", "English", "Computer Science", "History", null ],
//                 description: "can only be one of the enum values and is required"
//              },
//              gpa: {
//                 bsonType: [ "double" ],
//                 description: "must be a double if the field exists"
//              },
//              address: {
//                 bsonType: "object",
//                 required: [ "city" ],
//                 properties: {
//                    street: {
//                       bsonType: "string",
//                       description: "must be a string if the field exists"
//                    },
//                    city: {
//                       bsonType: "string",
//                       description: "must be a string and is required"
//                    }
//                 }
//              }
//           }
//        }
//     }
//  })
// var importDB = () => db.collection('trainDiary').insertOne(
//     {
//     excerciseDate : Date.now(),
//     bpm : "getBpm",
//     stats : "statistics"
//     }
// , (findErr, result) => {
//     if (findErr) throw findErr
//     console.log("aha")
//     client.close()
// })








// module.exports = importDB


// var MongoClient = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/trainDiary"

// MongoClient.connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, (err, client) => {
//     console.log('db connected')
//     var db = client.db('yourTrainDiary')


//     db.collection('yourTrainDiary').insertOne(
//         {
//         excerciseDate : Date.now(),
//         bpm : "getBpm()"
//         stats : "statistics()"
//         }
//     , (findErr, result) => {
//         if (findErr) throw findErr
//         console.log(result)
//         client.close()
//     }
//     )


    // db.collection('yourTrainDate').find({}, function(err, result) {
    //     if (err) throw err;
    //     console.log(result;
    //     client.close();
    // })


    // db.collection('yourTrainDate').updateOne({
    //     excerciseDate: 'Test',
    //     BPM: '100'

    // }, (findErr, result) => {

    //     if (findErr) throw findErr
    //     console.log(result.date)
    //     client.close()
    // })

    // db.collection('yourTrainDate').deleteOne({
    //     BPM: 100

    // }, (findErr, result) => {
    //     if (findErr) throw findErr
    //     console.log(result.date)
    //     client.close()
    // })

    //db.getCollection("yourTrainDiary").count() // yourTrainDiary
// })



// window.addEventListener('online', (e) => {
//     console.log("Online")
// })


// window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndxedDB

// window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction

// window.IDBKeyRange

// if(!window.indexedDB) {
//     window.alert ("Your Browser not support Indexed DB!!!")
// }

// var db
// var dbname = trainDiaryInDB
// var version = 001
// var mydb = indexedDB.open(dbname, version)

// mydb.onupgradeneeded = function() {
//     var db = open.result
//     var store = db.createObjectStore("myStore")
//     var index = store.createIndex("myIndex", ["aDate.traindate","aDate.bpm","aDate.accuracyPerc"])
// }

// mydb.onsuccess = function() {
//     var db = open.result
//     var tx = db.transaction("myStore","readwrite")
//     var store = tx.ObjectStore("myStore")
//     var index = store.createIndex("myIndex")

//     let aDate = {id, 1, aDate:{traindate: getDate(), bpm : getBpm(),accuracyPerc: getAccPerc() }}
//     store.put()

//     let varies = store.get(1)


//     varies.onsuccess = function(){
//         console.log(a.result.id)
//         console.log(a.result.aDate)
//         console.log(a.result.aDate.traindate)
//     }
// }

// tx.oncomplete = function() {
//     db.close
// }




