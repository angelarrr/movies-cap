'use strict';

angular.module('movControllers', [])

	.controller('moviesListCtrl', ['$scope', 'appFactory', function($scope, appFactory){

		$scope.countries = appFactory.getCountries();

		$scope.loadBoxOffice = function(countryCode){
			appFactory.getBoxOffice(countryCode).then(
				function(response){
					var boxMovies = response.data.movies;
					$scope.boxmovies = boxMovies;
				}
			)
		};

		$scope.loadBoxOffice('US');
	}])

	.controller('searchCtrl', ['$scope', '$http', '$q', '$timeout', 'appFactory',function($scope, $http, $q, $timeout, appFactory){

			// create promise for 2 second message
		function wait() {
			var defer = $q.defer();
			// Simulating doing some asynchronous operation...
			setTimeout(function() {
				defer.resolve();
			}, 2000);

			return defer.promise;
		};

		function searchResults() {
			$scope.searchResultsMsg = "Searching Rotten Tomatoes for " + $scope.query + "...";
			return wait().then(function() {
				$scope.searchResultsMsg = "";
			});
		};

		$scope.submit = function(){
			if($scope.searchForm.$valid) {

				searchResults().then(function(){
					appFactory.searchMovie($scope.query).then(function(response){
						var searchMovies = response.data.movies;
						$scope.movies = searchMovies;

						if (response.data.total === 0 ) {
							$scope.searchResultsMsg = 'No movies matching ' + $scope.query +' were found.';
						} else {
							$scope.searchResultsMsg = 'We found ' + response.data.total + ' results ' + $scope.query + '. Only 20 are shown below.';
						}

					});
				});
			}
		};
	}])