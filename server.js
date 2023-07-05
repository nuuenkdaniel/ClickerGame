const http = require('http');
const fs = require('fs');
const path = require('path');

let handleRequest = function(request,response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}
let server = http.createServer(handleRequest);
server.listen(8080);
console.log('Server started on port 8080');