app.controller('visualizarFichaCtrl', function($scope, $stateParams) {

	$scope.init = function() {
		$scope.ficha = JSON.parse($stateParams.ficha);
	}

});