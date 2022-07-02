'use strict';
const http = require('http'),
    https = require('https'),
    fs = require('fs')

const database = require('./lib/database'),
    getApp = require('./lib/getApp'),
    app = getApp(database)


// Connection URL
const port = 80,
    sslPort = 443,
    sslOpt = {
        key: fs.readFileSync("./ssl/privkey.pem"),
        cert: fs.readFileSync("./ssl/cert.pem")
    }



           

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