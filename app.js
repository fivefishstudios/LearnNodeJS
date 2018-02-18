var http = require('http');
var dt = require('./myfirstmodule.js');

http.createServer(function(req, res){
    console.log('debugging....'+ req.url);  // this only runs when browser makes a request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Hello world, from NodeJS <br> <b>This is bold</b>' + dt.currentDate3()  );
    res.write('<p>another line');
    res.write('<p>another line 2');
    res.write('<p>another line 3');
    res.write('<p> req.url is ' + req.url);
    res.write('<p> req.headers.accept is ' + req.headers.accept);
    res.write('<p> req.headers.user-agent is ' + req.headers['user-agent']);
   
    res.end();
}).listen(8080);