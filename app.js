'use strict';
const http = require('http')
const https = require('https')
const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

const port = 80
const sslPort = 443
const sslOpt = {
    key: fs.readFileSync("./ssl/privkey.pem"),
    cert: fs.readFileSync("./ssl/cert.pem")
}


global.__basedir = __dirname

app.set('view engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

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

app.get('/', (req, res) => {
    res.render("index", {
        title: 'Hello',
        message: 'World!'
    })
})