'use strict';

angular.module('movControllers', [])

	.controller('moviesListCtrl', ['$scope', 'appFactory', function($scope, appFactory){
		$scope.countries = appFactory.getCountries();
	}])