const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (request, respond) {
  var pathname = url.parse(request.url).pathname;
  if (pathname == "/accueil") {
      fs.readFile('accueil.html', function(err, data) {
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        respond.end();
      });

  } else if (pathname == "/parametres")  {
      fs.readFile('parametres.html', function(err, data) {
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        respond.end();
      });

  } else if (pathname == "/identification")  {
      fs.readFile('identification.html', function(err, data) {
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        respond.end();
      });

  } else if (pathname == "/nouveau_compte")  {
      fs.readFile('nouveauCompte.html', function(err, data) {
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        respond.end();
      });

  } else if (pathname == "/nouvel_article")  {
      fs.readFile('nouvelArticle.html', function(err, data) {
        respond.writeHead(200, {'Content-Type': 'text/html'});
        respond.write(data);
        respond.end();
      });

  } else {
        respond.writeHead(404)
        respond.end("passe ton chemin, bro")
      }

}).listen(8080);
