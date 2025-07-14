let fs = require('fs');
let http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
        //File Exist Check Using Asynchronous Module
        /*
        fs.exists('test.txt', function (result) {
            if (result) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('Congrats ! file found !');
                res.end();
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File not found !');
                res.end();
            }
        })        */


        //File Exist Check Using Synchronous Module

        let result = fs.existsSync('tes1t.txt')
        if (result) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('Congrats ! file found !');
            res.end();
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File not found !');
            res.end();
        }
    }

})
server.listen(5056)
console.log('Server is listening on port 5055')

// localhost:5056
// node fsExist.js
// npm run exist