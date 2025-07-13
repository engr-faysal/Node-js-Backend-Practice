console.log('Happy developing ✨')
const http = require('http');
const URL = require('url');

const server = http.createServer(function (request, response) {

// URL Desecting Testing
    var myURL = "http://rabbil.com/blog.html?year=2020&month=july";
    var myURLObj = URL.parse(myURL,true);

    var myHostname = myURLObj.host;
    var myPathName = myURLObj.pathname;
    var mySearch = myURLObj.search;

    response.writeHead(200, {'Content-Type': 'text/url'});
    response.write(myHostname);
    response.end();

});
server.listen('5051')
console.log('Server Run Success & listening on port 5051')



