'use strict';

angular.module('movieApp', ['ngRoute', 'ngAnimate', 'movServices', 'movControllers']).

config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : './views/movies-list.html',
		controller : 'moviesListCtrl',
	}).when('/generate', {
		templateUrl : './views/generate-dvd.html',
		controller : 'generateCtrl',
	}).when('/search', {
		templateUrl : './views/search-movie.html',
		controller : 'searchCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}])