module.exports = function (application) // Controller
{
	application.get('/formulario_inclusao_noticia', function(req, res) {
		application.app.controllers.admin.formulario_inclusao_noticia(application, req, res);

		//Passando a rendearização da pagina para o controllers, que naturalmente é a funcção dele
		// Essas rotas vão fazer o trabalho de instanciar os controllers

	});

	application.post('/noticias/salvar', function(req,res){

        application.app.controllers.admin.noticias_salvar(application, req, res);

    });
}