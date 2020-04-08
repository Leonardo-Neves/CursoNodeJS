module.exports.index = function (application, req, res) 
{
	var connection = application.config.dbConnetion();

	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.get5UltimasNoticias(function(error, result){
		res.render("home/index", { noticias : result }); // Usando o EJS como se fosse a View do ASP.NET
	});
}