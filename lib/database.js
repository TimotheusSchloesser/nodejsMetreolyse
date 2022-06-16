'use strict'
const MongoClient = require('mongodb').MongoClient;

const database = {
    
    initialize(mongoUrl, callback) {
        MongoClient.connect(mongoUrl, (err, database) => {
            if (err) {
                return callback(err)
            }

            var database = database.db('traindiary')
            this.td = database.collection('dates')
            callback(null)
        })
    },

    getDate(alias, callback) {
        this.td.findOne({ alias }, (err, dates) => {
            if (err) {
                return callback(err)
            }
            if(!dates) {
                // console.log(dates + ' test')
                return callback(new Error('alias not found!'))
            }
            console.log(dates + ' test')
            return callback(null, dates)
            // let dbTestDate = JSON.stringify(dates)
            // app.get('/db', function (req, res) {
                
            //  });
            // client.close()
        })
    },

    createDate(alias, target, callback) {
        if(!alias){
            throw new Error('Alias missing')
        }
        if(!target){
            throw new Error('Target missing')
        }
        if(!callback) {
            throw new Error('Callback missing')
        }
        const dates = {
            id : Date.now().toDateString('M/d/yyyy HH:mm'),
            alias,
            target: target,
            statistics: {
            date : Date.now().toDateString('M/d/yyyy HH:mm'),
            bpm : "150",
            stats : "90"
            }
        }

        this.td.insertOne(dates, err => {
            if(err){
                return callback(err)
            }
            console.log('inserted')
            callback(null)
        })
    }
}
module.exports = database
// Connection URL
// var url = 'mongodb://localhost:27017/';
// Use connect method to connect to the Server

// MongoClient.connect(url, function (err, client) {
//     if (err) {
//         console.log('failed to connect', err.message)
//         process.exit(1)
//     }

//     var db = client.db('traindiary');
    
//     const testEntry = {
//         date : Date.now(),
//         bpm : "150",
//         stats : "90"
//     }

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