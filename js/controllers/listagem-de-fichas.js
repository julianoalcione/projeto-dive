app.controller('listagemDeFichasCtrl', function($scope, services, $state) {
    
	$scope.init = function() {
		$('#dataFiltro1').mask('00/00/0000');
		$('#dataFiltro2').mask('00/00/0000');

		getFicha();
	}

	function getFicha() {
		services.getFichas().success(function(response) {
			$scope.fichas = response;

			for(var i=0; i<$scope.fichas.length;i++) {
				var data = $scope.fichas[i].dataDeCadastro.split("/");

				$scope.fichas[i].dataDeCadastro = new Date(data[2], (data[1] - 1), data[0]);
			}
		})
	}

	$scope.removerFicha = function(ficha) {
		services.removerFicha(ficha).success(function(response) {
			if(response) {
				getFicha();
			}
		});
	};

	$scope.visualizar = function(fichaAnimal) {
		var ficha = angular.copy(fichaAnimal);
		var data = ficha.dataDeCadastro;
		
		data.setMonth(data.getMonth() + 1);

		ficha.dataDeCadastro = 
				(data.getDate() <= 9 ? "0" + data.getDate() : data.getDate()) 
				+ "/" + 
				((data.getMonth()) <= 9 ? "0" + data.getMonth() : data.getMonth()) 
				+ "/" +
				data.getFullYear();

		$state.go("visualizar_ficha", {"ficha": JSON.stringify(ficha)});
	}

	$scope.editar = function(fichaAnimal) {
		var ficha = angular.copy(fichaAnimal);
		var data = ficha.dataDeCadastro;

		data.setMonth(data.getMonth() + 1);

		ficha.dataDeCadastro = 
				(data.getDate() <= 9 ? "0" + data.getDate() : data.getDate()) 
				+ "/" + 
				((data.getMonth()) <= 9 ? "0" + data.getMonth() : data.getMonth()) 
				+ "/" +
				data.getFullYear();

		$state.go("cadastro_de_ficha", {"ficha": JSON.stringify(ficha)});
	} 

});