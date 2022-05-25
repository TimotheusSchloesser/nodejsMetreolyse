'use strict';
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
// const WebSocket = require("ws")
// const MongoClient = require('mongodb').MongoClient
// const url = "mongodb://localhost:27017/trainDiary"



const port = 80
const sslPort = 443
// const sslPort = 10000
const sslOpt = {
    key: fs.readFileSync("./ssl/privkey.pem"),
    cert: fs.readFileSync("./ssl/cert.pem")
}


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

const books = [{"title":"LillyFee"}]
const users =["sven","hio","hoi"]



app.get('/', (req, res) => {
    res.render("metrolyse")
    title: 'Metrolyse'
})


app.get('/settings', (req, res) => {
    res.render("settings")
    title: "Settings"
})
