var fs = require('fs');
var http = require('http');

const Server1 =  http.createServer(function(request, response) {
if(request.url=="/"){

// Asynchronous Fs Module
    /*
    fs.readFile('fsModule.html', function(err, data) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(data);
        response.end();
    })       */

// Synchronous Fs Module

       let myData =  fs.readFileSync('fsModule.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(myData);
    response.end();
}
})
Server1.listen(5052);
console.log('Server Run Successfully & port 5052')

// localhost:5052
// node fsModule.js
// npm run fs