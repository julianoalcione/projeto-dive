app.factory("services", function($http) {
	
	const API_DIVE = "http://localhost:8081";

	var _getFichas = function() {
		return $http({
			method: "GET",
			url: API_DIVE + "/fichas"
		});
	};

	var _postSalvarFicha = function(ficha) {
		return $http({
			url: API_DIVE + "/salvar-ficha",
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		    },
			data: ficha
		});
	};

	var _removerFicha = function(ficha) {
		return $http({
			url: API_DIVE + "/remover-ficha",
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		    },
			data: ficha
		});
	};

	var _getAnimais = function() {
		return $http({
			method: "GET",
			url: API_DIVE + "/animais"
		});
	};

	var _removerAnimal = function(animal) {
		return $http({
			url: API_DIVE + "/remover-animal",
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		    },
			data: animal
		});
	};

	var _postSalvarAnimal = function(animal) {
		return $http({
			url: API_DIVE + "/salvar-animal",
		    method: "POST",
		    headers: {
		        "Content-Type": "application/json"
		    },
			data: animal
		});
	};

	return {
		getFichas: _getFichas,
		getAnimais: _getAnimais,
		postSalvarAnimal: _postSalvarAnimal,
		postSalvarFicha: _postSalvarFicha,
		removerFicha: _removerFicha,
		removerAnimal: _removerAnimal
	}
})
