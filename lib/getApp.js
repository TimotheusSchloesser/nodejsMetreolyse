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
    
    
    // Some express methods
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    
    // function(req, res) {  
        // res.sendFile(path.join(__dirname + 'public/index.html'));  
    // });  
    const command = 'findResult'
    const entry = { a: 12 }
    database(command, entry)
    //Service-Worker paths!
    app.get("/pwa.webmanifest", function(req, res) {
        res.header("Content-Type", "text/cache-manifest")
        console.log(path.join(__dirname,"pwa.webmanifest"))
        res.sendFile(path.join(__dirname,"pwa.webmanifest"))
    })

    app.get("/sw.js", function(req, res) {
        res.header("Content-Type", "text/javascript")
        console.log(path.join(__dirname,"sw.js"))
        res.sendFile(path.join(__dirname,"sw.js"))
    })

    app.get("/pwa.js", function(req, res) {
        res.header("Content-Type", "text/javascript")
        console.log(path.join(__dirname,"pwa.js"))
        res.sendFile(path.join(__dirname,"pwa.js"))
    })

    

    // Routes (URL´s) of the Application
    app.get('/api',(req, res) => {
        database.getDate((err, traindiary))
    })
    // app.post('/api/:alias',routes.getPostApiTrain(database));
    app.get('/', routes.getMetrolyse)
    app.get('/settings', routes.getMetrolyse)
    app.get('/metrolyse', routes.getMetrolyse)
    app.get('/stuff', routes.getStuff)
    app.get('/db', routes.getDb)
    app.get('/traindiary', routes.getTraindiary)



    return app
}
module.exports = getApp