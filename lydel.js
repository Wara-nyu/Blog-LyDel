const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (request, respond) {
  var pathname = url.parse(request.url).pathname;
  if (pathname == "/homepage") {
      fs.readFile('homePage.html', function(err, data) {
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        respond.end();
      });  
  } else {
        respond.writeHead(404)
        respond.end("passe ton chemin, bro")
      }


}).listen(8080);
