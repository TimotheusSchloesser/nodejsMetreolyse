'use strict';
const http = require('http')
const https = require('https')

const fs = require('fs');
const getApp = require('./lib/getApp')
const database = require('./lib/database')
const { exit } = require('process');
// const WebSocket = require("ws")


// Connection URL
var url = 'mongodb://localhost:27017/traindiary';


database.initialize(url, err => {
    if(err){
         console.log('failed to connect', err.message)
                process.exit(1)
    }
})
const app = getApp()
const port = 80
const sslPort = 443

const sslOpt = {
    key: fs.readFileSync("./ssl/privkey.pem"),
    cert: fs.readFileSync("./ssl/cert.pem")
}

database.showEntries()  

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

