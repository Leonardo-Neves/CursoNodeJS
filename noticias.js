var http = require('http'); // Importando o HTTP para criar um servidor

var server = http.createServer(function(req, res) {
	var categoria = req.url; // esse req.url pega como se fosse a action do ASP.NET

	if(categoria == '/tecnologia')
	{
		res.end("<html><body>Noticias de Técnologia</html></body>");	
	}
	else if(categoria == '/moda')
	{
		res.end("<html><body>Moda</html></body>");
	}
	else 
	{
		res.end("<html><body>Portal de Noticias</html></body>");
	}

	//res.end("<html><body>Portal de Noticias</html></body>");
	// Criou um servidor  colocaou uma resposta
});

server.listen(3000); // Colocando a porta



