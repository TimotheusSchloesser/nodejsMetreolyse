'use strict'
const express = require('express')
const path = require('path')
const database = require('./database')

const getApp = function () {

    

    const app = express()

    global.__basedir = __dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))

app.use(express.static(path.join(__dirname, "../public")))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

    app.get('/', (req, res) => {
        res.render("metrolyse")
        title: 'Metrolyse'
    })
    
    app.get('/metrolyse', (req, res) => {
        res.render("/")
        title: 'Metrolyse'
    })
    
    
    app.get('/settings', (req, res) => {
        res.render("settings")
        title: "Settings"
    })
    
    app.get('/stuff', (req, res) => {
        res.render("stuff")
        title: "Stuff"
    })
    
    app.post('/db', (req, res) => {
        res.render("db")
        message: "Test"
    })
    
    app.get('/db', function(req, res) {
        
        res.render('db', {
        title: "Datenbank",
        message: 13243
    })
    })

    app.get('/:alias', (req, res) => {
        const alias = req.params.alias
    
    database.showEntries(alias, (err, dates) => {
        
    })
    })
    
    return app
}


module.exports = getApp