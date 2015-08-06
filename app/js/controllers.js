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

	.controller('searchCtrl', ['$scope', '$http', '$q', '$timeout', 'appFactory', function($scope, $http, $q, $timeout, appFactory){

		// create promise for 2 second message
		function wait() {
			var defer = $q.defer();
			// Simulating doing some asynchronous operation...
			setTimeout(function() {
				defer.resolve();
			}, 4000);

			return defer.promise;
		};

		// search result message
		function searchResults() {
			$scope.searchResultsMsg = "Searching Rotten Tomatoes for " + $scope.query + "...";
			return wait().then(function() {
				$scope.searchResultsMsg = "";
			});
		};

		// submit function on search
		$scope.submit = function(){
			if($scope.searchForm.$valid) {

				searchResults().then(function(){
					appFactory.searchMovie($scope.query).then(function(response){
						var searchMovies = response.data.movies;
						$scope.movies = searchMovies;

						if ($scope.movies.length === 0 ) {
							$scope.searchResultsMsg = 'No movies matching ' + $scope.query +' were found.';
						} else if ($scope.movies.length > 0) {
							$scope.searchResultsMsg = 'We found ' + $scope.movies.length + ' results for ' + $scope.query + '.';
						} else {
							$scope.searchResultsMsg = 'Something went wrong! Please try again.';
						}

					});
				});
			}
		};
	}])

	.controller('generateCtrl', ['$scope', 'appFactory', function($scope, appFactory){

		$scope.generateDvd = function(){
			appFactory.getDvd().then(function(response){
				var random = response.data.movies;
				$scope.dvds = [];

				var num = Math.floor(Math.random() * random.length);
				console.log(num);
				$scope.dvds.push(random[num]);
			})
		};
	}])