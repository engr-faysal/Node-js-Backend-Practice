let fs = require('fs');
let http = require('http');

let server = http.createServer(function (req, res) {
    if (req.url === '/') {
        let myData =   fs.readFileSync('./practice Project/home.html', 'utf8')

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(myData);
        res.end();
    }

    else if (req.url === '/about.html') {
        let myData =   fs.readFileSync('./practice Project/about.html', 'utf8')

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(myData);
        res.end();
    }
    else if (req.url === '/contact.html') {
        let myData =   fs.readFileSync('./practice Project/contact.html', 'utf8')

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(myData);
        res.end();
    }
    /*else {
        res.end('not found');
    }*/
})
server.listen(5059);
console.log("Server started on port 5059");

// localhost:5059
// node ".\practice project\index1.js"
// npm run project

// http://localhost:5059/
// http://localhost:5059/about.html
// http://localhost:5059/contact.html



