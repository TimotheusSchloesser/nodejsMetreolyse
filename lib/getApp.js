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
    app.set('views', path.join(__dirname, '../views'))
    app.use(express.static(path.join(__dirname, "../public")))

    // Some express methods
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))


    // Routes (URL´s) of the Application
    app.get('/', routes.getMetrolyse)
    app.get('./metrolyse', routes.getMetrolyse)
    app.get('./settings', routes.getMetrolyse)
    app.get('./stuff', routes.getStuff)
    app.get('./traindiary', routes.getDb)
    app.get('/:alias', routes.getTraindiary)
    app.post('/api/traindiary:id', routes.getPostApiTrain)

    return app
}
module.exports = getApp