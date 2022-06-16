'use strict'
const express = require('express')
const path = require('path')
// const database = require('./database')
const routes = require('./routes') //index wird als standard gelesen

const getApp = function () {
    const app = express()
    // const path = path()

    global.__basedir = __dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../views'))

app.use(express.static(path.join(__dirname, "../public")))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// app.get('/:alias', routes.getAlias(database))
// app.get('/api', routes.getApi(database))
// app.post('/api/:alias', routes.postApiAlias(database))
app.get('/', (req,res) => { 
    res.redirect('https://www.google.com')
    console.log('test')
    res.end()
})


    // app.get('/api',  routes.getRoot())
    // app.get('/api/metrolyse', routes.getMetrolyse())
        
        // })
    // app.get('/metrolyse', (req, res) => {
    //     res.render("/")
    //     title: 'Metrolyse'
    // })
    
    
    // app.get('/settings', (req, res) => {
    //     res.render("settings")
    //     title: "Settings"
    // })
    
    // app.get('/stuff', (req, res) => {
    //     res.render("stuff")
    //     title: "Stuff"
    //     res.end()
    // })
    
    // app.post('/db', (req, res) => {
    //     res.render("db")
    //     message: "Test"
    //     res.end()
    // })
    
    // app.get('/db', function(req, res) {
        
    //     res.render('db', {
    //     title: "Datenbank",
    //     message: 13243,
    // })
    // })

    // app.get('/:alias', (req, res) => {
    //     const alias = req.params.alias
    
    // database.showEntries(alias, (err, alias) => {
    //    res.end() 
    // })
    // })
    
    return app
}

module.exports = getApp