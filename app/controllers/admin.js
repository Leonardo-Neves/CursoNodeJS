module.exports.formulario_inclusao_noticia = function (application, req, res) 
{
	res.render("admin/form_add_noticia", { validacao: {}, noticia: {} });
		// Para não dar problema na hora de entrar na pagina, precisa passar essas variaveis que seram usadas como vazio para depois preencher
}

// Module suporta pssar atributos e funções

module.exports.noticias_salvar = function (application, req, res)
{
	var noticia = req.body;

    req.assert('titulo', 'Título é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', 'Autor é obrigatório').notEmpty();
    req.assert('data_noticias', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'Notícia é obrigatório').notEmpty();

    var erros = req.validationErrors();

    if(erros){
        res.render('admin/form_add_noticia', {validacao: erros,  noticia: noticia});
        return;
    }

    var connection = application.config.dbConnetion();
    var noticiasModel = new application.app.models.NoticiasDAO(connection);

    noticiasModel.salvarNoticias(noticia, function(error, result){
        res.redirect('/noticias');
    });


}