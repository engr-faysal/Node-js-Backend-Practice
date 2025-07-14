var fs = require('fs');
var http = require('http');

const Server1 =  http.createServer(function(request, response) {
    if(request.url=="/"){

    // File write by Asynchronous Fs Module
        /*
        fs.writeFile('FsModuleWrite.txt','Hello ! I am FS Write Module',function(error){
            if(error){
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.write('File not found or failed to write.');
                response.end();
            }
            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write('File Write Successful.');
                response.end();
            }
        });
        */


    // File write by Synchronous Fs Module
            let error = fs.writeFileSync('FsModuleWrite.txt','Welcome ! I am FS Write Module');
            if(error){
                response.writeHead(500, {'Content-Type': 'text/html'});
                response.write('File not found or failed to write.');
                response.end();
            }
            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write('File Write Successful with Synchronizing Module.');
                response.end();
            }
    }
})
Server1.listen(5053);
console.log('Server Run Successfully & port 5053')

// localhost:5053
// node fsWriteModule.js
// npm run fsWrite