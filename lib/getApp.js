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
    app.post('/api', function (req, res) {
        const reqCommand = req.body
        let command = reqCommand.command
        JSON.stringify(command)
        const entry = reqCommand.entry
        database(command, entry)
    
        res.json({att1: reqCommand.command,
            att2: reqCommand.localStorage})
        res.end()
    })
    
    app.get('/', routes.getMetrolyse)
    app.get('/settings', routes.getSettings)
    app.get('/metrolyse', routes.getMetrolyse)
    app.get('/traindiary', routes.getTraindiary)



    return app
}
console.log()
module.exports = getApp