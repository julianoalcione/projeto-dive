app.controller('cadastroDeFichaCtrl', function($scope, services, $stateParams) {
    
	$scope.ficha = {
		animais: []
	}

	$scope.init = function() {
		$('#dataDeCadastro').mask('00/00/0000');

		if($stateParams.ficha) {
			$scope.ficha = JSON.parse($stateParams.ficha);
		}	
		
		getAnimais();
	}	

	function getAnimais() {
		services.getAnimais().success(function(response) {
			$scope.animais = response;

			if($scope.ficha.id) {
				removeAnimais();
			}
		});
	}

	$scope.salvar = function(ficha) {
		$scope.msgSucesso = false;

		if(!ficha.animais.length) {
			$scope.msgAnimal = true;	
		} else {
			$scope.msgAnimal = false;
		}

		services.postSalvarFicha(ficha).success(function(response) {
			if(response.id) {
				$scope.msgSucesso = true;
				document.body.scrollTop = document.documentElement.scrollTop = 0;
			}
		})
	}

	$scope.adicionarAnimal = function(animal, index) {
		$scope.animais.splice(index, 1);
		$scope.ficha.animais.push(animal);
	}

	$scope.removerAnimal = function(animal, index) {
		$scope.ficha.animais.splice(index, 1);
		$scope.animais.push(animal);
	}

	function removeAnimais() {
		$scope.ficha.animais.forEach(function(animal) {
			for(var i=0; i<$scope.animais.length; i++) {
				if($scope.animais[i].id == animal.id) {
					$scope.animais.splice(i, 1);
				}
			}
		})
	}
});