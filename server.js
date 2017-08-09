var fs = require('fs');
var http = require('http');
var url = require('url');

var PORT = 8080;

var server = http.createServer(function(request, response) {
    response.end("Is this thing on?");
});

server.listen(PORT, function(err, data) {
    console.log("server listening http://localhost:" + PORT);
});