var http = require('http'),
fs = require('fs')
port = 80

http.createServer(function(req, res){
    if(req.url.indexOf(".css") !== -1){
        fs.readFile(__dirname + "/css/style.css",function(err, data){
            res.writeHead(200,{'content-Type': 'text/css'})
            res.write(data)
            res.end()  
        })
    } 
    else{ 
        fs.readFile(__dirname + "/index.html",function(err, data){
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write(data)
            res.end()  
        })
    }
    
}).listen(port)
console.log('running on port: '+ port)