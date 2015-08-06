'use strict';

angular.module('movieApp', ['ngRoute', 'movServices', 'movControllers']).

config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/', {
		templateUrl : './views/home.html',
	}).when('/movieslist', {
		templateUrl : './views/movies-list.html',
		controller : 'moviesListCtrl',
	}).otherwise({
		redirectTo: '/'
	});
}])