function NoticiasDAO (connection) { // Banco de Dados
	// Implementando um tipo de classe
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(connection, callback) // Metodos da classe NoticiasDAO
{
	this._connection.query('select * from noticias', callback);
}

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback)
{	
	this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback );
}

NoticiasDAO.prototype.salvarNoticias = function(noticia, connection, callback)
{
	console.log(" Banco",noticia);
	this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback)
{
	this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
	// Vai voltar as 5 ultimas noticias
}

module.exports = function () {
	return NoticiasDAO;
	
}