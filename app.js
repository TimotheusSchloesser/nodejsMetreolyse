'use strict';
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
// const WebSocket = require("ws")

const port = 80
const sslPort = 443
const sslOpt = {
    key: fs.readFileSync("./ssl/privkey.pem"),
    cert: fs.readFileSync("./ssl/cert.pem")
}

var MongoClient = require('mongodb').MongoClient;
var database;

// Connection URL
var url = 'mongodb://localhost:27017/';
// Use connect method to connect to the Server

MongoClient.connect(url, function (err, client) {
    if (err) {
        console.log('failed to connect', err.message)
        process.exit(1)
    }

    var db = client.db('traindiary');
    database = db
    db.collection('dates').findOne({}, function (findErr, result) {
    // db.collection.find({}, function (findErr, result) {
        if (findErr) throw findErr;
        console.log(result.date);
        client.close();
    });
});


global.__basedir = __dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


http.createServer((req, res) => {
    console.log('redirect')
    res.writeHead(301, { "Location": "https://lyra.et-inf.fho-emden.de:20144/" })
    res.end()
}).listen(port, (err) => {
    console.log("Port:" + port)
})

https.createServer(sslOpt, app).listen(sslPort, (err) => {
    console.log("ListenOnPort " + sslPort)
})

// const books = [{"title":"LillyFee"}]
// const users =["sven","hio","hoi"]



app.get('/', (req, res) => {
    res.render("metrolyse")
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