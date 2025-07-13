console.log('Happy developing ✨')
const http = require('http');

const server = http.createServer(function (request, response) {
    // response.end('Hello World!');

    if (request.url == "/") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1> This is Home Page</h1>');
        response.end()
    } else if (request.url == "/about") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1> This is About Page</h1>');
        response.end()
    } else if (request.url == "/contact") {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('<h1> This is Contact Page</h1>');
        response.end()
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'});
        response.write('<h1>404 Page Not Found</h1>');
        response.end();
    }
});
server.listen('5050')
console.log('Server Run Success & listening on port 5050')
