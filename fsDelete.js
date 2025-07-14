let fs = require('fs');
let http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url === '/') {
    //File Unlink Using Asynchronous Module
        /*
        fs.unlink('testUnlink.txt', function (err) {
            if (err) {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File cant delete or unlink !');
                res.end();
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write('File delete or unlink is Successful!');
                res.end();
            }
        })        */


    //File Unlink Using Synchronous Module

        let err = fs.unlinkSync('testUnlink.txt')
        if (err) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File cant delete or unlink !');
            res.end();
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('File delete or unlink is Successful with Synchronous System!');
            res.end();
        }
    }

})
server.listen(5055)
console.log('Server is listening on port 5055')

// localhost:5055
// node fsDelete.js
// npm run delete