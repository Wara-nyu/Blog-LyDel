const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (request, respond) {

	var page = [
		'accueil', 
		'parametres', 
		'identification', 
		'nouveau_compte', 
		'nouvel_article'
	];

  var pathname = url.parse(request.url).pathname;

	var page_lue = false;

	console.log(pathname);
	for (var i = 0; i < page.length; i++) {
		if (pathname == "/" + page[i]) {
				fs.readFile(page[i] + '.html', function(err, data) {
					respond.writeHead(200, {'Content-Type': 'text/html'});
					respond.write(data);
					respond.end();
				});
				page_lue = true;
		}
	}

  if (page_lue == false) {
        respond.writeHead(404)
        respond.end("passe ton chemin, bro")
      }

}).listen(8080);
