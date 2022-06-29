'use strict';
const express = require('express')
const routes = require('./routes')
const path = require('path')


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
    // const command = 'findResult'
    const entry =  [{ a: 12 }]
    function getID (command, entry){
        database(command, entry)
    }
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
    app.get('/settings', routes.getSettings)
    app.get('/metrolyse', routes.getMetrolyse)
    app.get('/stuff', routes.getStuff)
    app.get('/db', routes.getDb)
    app.get('/traindiary', routes.getTraindiary)



    // const result = entry

    // app.post('/api/traindiary/', routes.getPostApiTrain())


    return app
}
console.log()
module.exports = getApp