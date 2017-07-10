var http = require('http');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.set('port', port);

app.get('/query', function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World Nuffield Team! (get method)");
    console.log("I'm here from get");
});

app.post('/query', function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World Nuffield Team Again! (post method)");
    console.log("I'm here from post");
});

var server = http.createServer(app);
server.listen(port);

console.log("Server running at http://localhost:%d", port);
