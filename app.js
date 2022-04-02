var http = require('http')
fs = require('fs')
port = 80

http.createServer(function(req, res){

    fs.readFile("index.html",function(err, data){
        res.writeHead(200,{'content-Type': 'text/html'})
        res.write(data)
        res.end()
    })

    
}).listen(port)
console.log('running on port: '+ port)