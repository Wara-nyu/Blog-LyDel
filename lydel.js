const http = require('http');
const url = require('url');

http.createServer(function (request, respond) {
  var pathname = url.parse(request.url).pathname;
  if (pathname == "/home") {
      fs.readFile('home.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });  
  } else {
        respond.writeHead(404)
        respond.end("passe ton chemin, bro")
      }


}).listen(8080);
