'use strict';

angular.module('movieApp', ['ngRoute', 'ngAnimate', 'movServices', 'movControllers']).

config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : './views/home.html',
	}).when('/movieslist', {
		templateUrl : './views/movies-list.html',
		controller : 'moviesListCtrl',
	}).when('/search', {
		templateUrl : './views/search-movie.html',
		controller : 'searchCtrl'
	}).when('/generate', {
		templateUrl : './views/generate-dvd.html',
		controller : 'generateCtrl'
	}).otherwise({
		redirectTo: '/'
	});
}])