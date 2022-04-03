const path = require("path")
const express = require("express")
const { appendFile } = require("fs")
const app = express()
const port = 80

app.set('view engine', 'pug')
app.use(express.static('public'))


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

app.listen(port,function(){
    console.log("listen: " + port)
})