'use strict';
const express = require('express')
const routes = require('./routes')
const path = require('path')
const MongoClient = require('mongodb').MongoClient;
// const bodyParser = require('body-parser')
const mongoUrl = 'mongodb://localhost:27017/',
    client = new MongoClient(mongoUrl),
    dbName = 'traindiary'


const getApp = function (database) {
    if (!database) {
        throw new Error('Database is missing!')
    }

    const app = express()

    // Sets Pug and some Paths
    global.__basedir = __dirname
    app.set('view engine', 'pug')
    app.use(express.static(path.join(__dirname, "../")))
    app.set('views', path.join(__dirname, '../views'))
    app.use(express.static(path.join(__dirname, "../public")))
    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({ extended: true }))

    // Some express methods
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))

    // function(req, res) {  
    // res.sendFile(path.join(__dirname + 'public/index.html'));  
    // });  
    const command = 'findResult'
    const entry =  [{ a: 12 }]
    // const data = database(command, entry)
    // database(command, entry)
    // console.log(database('findResult'))
    //Service-Worker paths!
    app.get("/pwa.webmanifest", function (req, res) {
        res.header("Content-Type", "text/cache-manifest")
        console.log(path.join(__dirname, "pwa.webmanifest"))
        res.sendFile(path.join(__dirname, "pwa.webmanifest"))
    })

    app.get("/sw.js", function (req, res) {
        res.header("Content-Type", "text/javascript")
        console.log(path.join(__dirname, "sw.js"))
        res.sendFile(path.join(__dirname, "sw.js"))
    })

    app.get("/pwa.js", function (req, res) {
        res.header("Content-Type", "text/javascript")
        console.log(path.join(__dirname, "pwa.js"))
        res.sendFile(path.join(__dirname, "pwa.js"))
    })



    // Routes (URL´s) of the Application
    // app.post('/api/traindiary', routes.getPostApiTrain())
    app.post('/api/traindiary/', routes.getPostApiTrain)
    app.get('/api', routes.getApi)

    

    app.get('/api/:id', function (req, res, next) {
        res.render('api', { output: req.params.id })
        let command = req.params.id   
        getID(command, entry)
    })

    // console.log(id)
    app.post('/api', function (req, res, next) {
        var id = req.body.id;
        res.redirect('/api/' + id)
    })
    
    // app.post('/api/:alias',routes.getPostApiTrain(database));
    app.get('/', routes.getMetrolyse)
    app.get('/settings', routes.getMetrolyse)
    app.get('/metrolyse', routes.getMetrolyse)
    app.get('/stuff', routes.getStuff)
    app.get('/db', routes.getDb)
    app.get('/traindiary', routes.getTraindiary)



    const result = entry

    // app.post('/api/traindiary/', routes.getPostApiTrain())

    const main = async function (command, entry) {
        const client = new MongoClient(mongoUrl)
        
    // console.log(entry)
    
        await client.connect();
        console.log('Connected successfully to server')
        const db = client.db(dbName)
        const collection = db.collection('dates')
        // goForIt(entry)
        try {

            if (command == 'insertResult') {
                const insertResult = await collection.insertMany(entry)
                console.log('Inserted documents =>', insertResult)

            } else if (command == 'findResult') {
                const findResult = await collection.find({}).toArray() // {} = all
                console.log('Found documents =>', findResult);
            }
            else if (command == 'findOne') {
                await collection.findOne(entry) // {} = all
                console.log('Found document =>', entry)
            } else if (command == 'insertOne') {
                const insertOne = await collection.insertOne(entry, function (err, res) {
                    if (err) throw err;
                    console.log("Document inserted");
                    // close the connection to db when you are done with it
                    // db.close(); 
                })
            }
            else if (command == 'filteredDocs') {
                const filteredDocs = await collection.find(entry).toArray()
                console.log('Found documents filtered by ' + entry.stringify() + ' =>', filteredDocs);
            }
            else if (command == 'updateResult') {
                const updateResult = await collection.updateOne({ a: 3 }, { $set: { b: 1 } });
                console.log('Updated documents =>', updateResult);
            }
            else if (command == 'deleteResult') {
                const deleteResult = await collection.deleteMany();
                console.log('Deleted documents =>' + JSON.stringify(entry), deleteResult);
            }
            else if (command == 'indexName') {
                const indexName = await collection.createIndex({ a: 1 });
                console.log('index name =', indexName);
            }
            else if (command == 'getIndexes') {
                const getIndexes = await collection.getIndexes();
                console.log('index name =', getIndexes);
            }
            else if (command == undefined) {
                console.log("command not found!")
            }
        } catch (error) {
            if (error instanceof MongoServerError) {
                console.log(`Error worth logging: ${error}`); // special case for some reason
            }
            throw error; // still want to crash 
        }
        return result;
    }


    // const goForIt = async function (entry) {
    //     const client = new MongoClient(mongoUrl),
    //         db = client.db(dbName),
    //         collection = db.collection('dates')
    //     console.log(entry)
    //     var result
      
    //     console.log(result)

    //     // app.get('/api', routes.getApi)

    //     // return result
    // }
    function getID (command, entry){
    main(command, entry)
        .then(console.log)
        .catch(console.error)
        .finally(() => client.close());
    }


    return app
}
console.log()
module.exports = getApp