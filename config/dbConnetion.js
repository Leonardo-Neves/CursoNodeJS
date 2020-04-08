var mysql = require('mysql');

var connMySQL = function () {
	return mysql.createConnection({ // Passando os atributos para a conexão
	host : 'localhost',
	user : 'root',
	password : '1234567',
	database : 'portal_noticias'
	});
	
}

module.exports = function ()
{
	return connMySQL;
}