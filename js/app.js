var app = angular.module('app', ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/listagem-de-fichas');

	$stateProvider
        .state('listagem_de_fichas', {
            url: '/listagem-de-fichas',
            templateUrl: '/projeto-dive/templates/listagem-de-fichas.html',
            controller: 'listagemDeFichasCtrl'
        })
        .state("cadastro_de_animal", {
	        url: "/cadastro-de-animal",
	        templateUrl : "/projeto-dive/templates/cadastro-de-animal.html",
	        controller: "cadastroDeAnimalCtrl"
	    })
	    .state("cadastro_de_ficha", {
	        url: "/cadastro-de-ficha:ficha?",
	        templateUrl : "/projeto-dive/templates/cadastro-de-ficha.html",
	        controller: "cadastroDeFichaCtrl"
	    })
	    .state("visualizar_ficha", {
	        url: "/visualizar-ficha/:ficha",
	        templateUrl : "/projeto-dive/templates/visualizar-ficha.html",
	        controller: "visualizarFichaCtrl"
	    })
});