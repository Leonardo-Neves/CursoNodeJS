//var dbConnection = require('../../config/dbConnetion');

module.exports = function (application) // Controller
{
	application.get('/noticias', function(req, res) {

		application.app.controllers.noticias.noticias(application, req, res);
	});	

	application.get('/noticia', function(req, res) { // Controller

		application.app.controllers.noticias.noticia(application, req, res);
	});	
};
