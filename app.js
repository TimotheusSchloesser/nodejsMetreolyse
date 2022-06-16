'use strict';
const http = require('http'),
    https = require('https'),
    fs = require('fs')

const database = require('./lib/database'),
    getApp = require('./lib/getApp'),
    app = getApp()

// const WebSocket = require("ws")

// Connection URL
var mongoUrl = 'mongodb://localhost:27017/';

const port = 80,
    sslPort = 443,
    sslOpt = {
        key: fs.readFileSync("./ssl/privkey.pem"),
        cert: fs.readFileSync("./ssl/cert.pem")
    }


database.initialize(mongoUrl, err => {
    if (err) {
        console.log('Failed to connect to Database')
    } 
})


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