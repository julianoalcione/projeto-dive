app.controller('cadastroDeAnimalCtrl', function($scope, services) {
    
	$scope.init = function() {
		getAnimais();
	}

	$scope.editar = function(animal) {
		$scope.animal = animal;
		document.getElementById("cadastrar-animal").focus();
	}

	$scope.salvar = function(animal) {
		$scope.msgSucesso = false;
		
		services.postSalvarAnimal(animal).success(function(response){
			$scope.msgSucesso = true;
			getAnimais();
		})
	}

	function getAnimais() {
		services.getAnimais().success(function(response) {
			$scope.animais = response;
		});
	}

	$scope.removerAnimal = function(animal) {
		services.removerAnimal(animal).success(function(response) {
			getAnimais();
		});
	}

});