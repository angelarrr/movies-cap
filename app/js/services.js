'use strict';

angular.module('movServices', [])
	.value('version', '1.0')

	.constant('API_CONFIG', {
		BASE: 'http://api.rottentomatoes.com/api/public/v1.0/',
		KEY: 'vnava55vpau5rvt85b46vgzg',
		CALLBACK: 'JSON_CALLBACK'
	})

	.factory('appFactory', ['$http', 'API_CONFIG', function($http, API_CONFIG){
		var countries = [
			{ name: 'USA', code: 'US' },
			{ name: 'South Korea', code: 'KR'},
			{ name: 'Australia', code: 'AU'},
			{ name: 'South Africa', code: 'ZA'},
			{ name: 'Hong Kong', code: 'HK' }
		];

		return {
			getCountries: function(){
				return countries;
			},

			getBoxOffice: function(countryCode){
				return $http.jsonp(API_CONFIG.BASE+'lists/movies/box_office.json?limit=20&country='+ countryCode +'&callback='+API_CONFIG.CALLBACK+'&apikey='+ API_CONFIG.KEY);
			},

			searchMovie: function(query){
				return $http.jsonp(API_CONFIG.BASE+'movies.json?q='+ encodeURI(query) + '&callback='+API_CONFIG.CALLBACK+'&page_limit=20&apikey='+API_CONFIG.KEY);
			},

			getDvd: function(){
				return $http.jsonp(API_CONFIG.BASE+'lists/dvds/current_releases.json?page_limit=50&callback='+API_CONFIG.CALLBACK+'&apikey='+API_CONFIG.KEY);
			},

			getDetails: function(id){
				return $http.jsonp(API_CONFIG.BASE+'movies/'+id+'.json?apikey='+API_CONFIG.KEY)
			}
		};
	}])
// api key: hnk4j9zjqxj278dtcragxmdm (waiting for approval)
// use random api key found online for now: vnava55vpau5rvt85b46vgzg