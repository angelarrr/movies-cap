'use strict';

angular.module('movControllers', [])

	.controller('moviesListCtrl', ['$scope', 'appFactory', function($scope, appFactory){

		$scope.countries = appFactory.getCountries();

		$scope.loadBoxOffice = function(countryCode){
			appFactory.getBoxOffice(countryCode).then(
				function(response){
					var boxMovies = response.data.movies;
					$scope.movies = boxMovies;
				}
			)
		};

		$scope.loadBoxOffice('US');
	}])