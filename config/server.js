var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express(); // Recuperando a função que o modulo do express retorna

app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(express.static('./app/public')); // Essa linha carrega todos os estilos da pagina
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator()); // Express Validator

consign()
	.include('app/routes')
	.then('config/dbConnetion.js')
	.then('app/models') 
	.then('app/controllers')
	.into(app); // Vai escanear todas as rotas da pasta routes e colocar no app que é o servidor
	// Essas rotas são como se fossem os controllers que levam para um view
	
module.exports = app;
