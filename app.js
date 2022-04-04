const http = require('http')
const https = require('https')
const path = require("path")
const express = require("express")
const fs = require("fs")
const app = express()
const port = 80
const sslPort = 443
const sslOpt = {
    key: fs.readFileSync("./ssl/privkey.pem"),
    cert: fs.readFileSync("./ssl/cert.pem")
}

global.__basedir = __dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, "public")))


let http_server = http.createServer((req, res) => {
    console.log('redirect')
    res.writeHead(301, { "Location": "https://lyra.et-inf.fho-emden.de:20144/" })
    res.end()
}).listen(port, (err) => {
    console.log("Port:" + port)
})



let server = https.createServer(sslOpt, app).listen(sslPort, (err) => {
    console.log("ListenOnPort" + sslPort)
})




app.get('/', function(req,res){
    res.render('index', {
        title:'Hello',
        message:'Hell o World!'
    })
})

app.get('login', function(req,res){
    res.render('index', {
        title:'Hello',
        message:'Hell o World!'
    })
})

app.post('/', function(req,res){
    res.render('index', {
        title:'Hello',
        message:'Hell o World!'
    })
})