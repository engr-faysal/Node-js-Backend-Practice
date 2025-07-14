let fs = require('fs');
let http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
    //File Rename Using Asynchronous Module
        /*
        fs.rename('test.txt', 'testNEW.txt', function (err) {
            if (err) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File cant rename !');
                res.end();
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File rename Successful!');
                res.end();
            }
        })             */



    //File Rename Using Synchronous Module
            let err = fs.renameSync('testNEW.txt', 'test.txt')
            if (err) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File cant rename !');
                res.end();
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File rename Successful with synchronous system!');
                res.end();
            }
    }

})
server.listen(5054)
console.log('Server is listening on port 5054')

// localhost:5054
// node fsRename.js
// npm run fsRename