define(['app/control'], function() {
	var app = angular.module('controlPanel',[]);
	app.controller('panel1', function($scope) {
		$scope.data = {
			userPanel: {
				step: 100,
				top: 0,
				left: 0,
				range: [800, 800]
			},
			blockPanel: {},

		};
		$scope.add = function() {
			
		}
		console.log($scope.data)
	})
	console.log(angular)
})

