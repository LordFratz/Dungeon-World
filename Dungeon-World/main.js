var app = angular.module('DungeonGame', []);

app.controller('PageController', function($scope) {
	$scope.CurrentGold = 0;
	$scope.GoldClickerClicked = function() {
		$scope.CurrentGold += 1;
		console.log($scope.CurrentGold);
	};
});