module.exports.noticias = function (application, req, res)
{
	var connection = application.config.dbConnetion();

	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias(connection,  function(erro, result) {
		res.render("noticias/noticias", {noticias : result });
	});
}

module.exports.noticia = function (application, req, res)
{
	var connection = application.config.dbConnetion();

	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	var id_noticia = req.query;

	console.log(id_noticia);

	noticiasModel.getNoticia(id_noticia, function(erro, result) {
		res.render("noticias/noticia", {noticia : result });
	}); 
}