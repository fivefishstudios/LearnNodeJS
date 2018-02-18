
var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req, res){
    fs.readFile('helloworld.htm', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html' });
        res.write(data);
        console.log('running...' + Date());
        res.end();    
    })
    
});

myServer.listen('8080');