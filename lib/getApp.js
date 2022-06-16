'use strict';
const express = require('express')
const routes = require('./routes')
const path = require('path')

const getApp = function() {
    const app = express()

    
global.__basedir = __dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(path.join(__dirname, "../public")))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
   
    
        
    app.get('/', routes.getMetrolyse)
    app.get('/settings', routes.getSettings)
    app.get('/stuff', routes.getStuff)
    app.get('/traindiary', routes.getDb)

    return app
}
module.exports = getApp