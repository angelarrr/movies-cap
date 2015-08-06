'use strict';

angular.module('movServices', [])
	.value('version', '1.0')

	.constant('API_KEY', 'vnava55vpau5rvt85b46vgzg')

	.factory('appFactory', ['$http', 'API_KEY', function($http, API_KEY){
		var countries = [
			{ name: 'USA', code: 'US' },
			{ name: 'South Korea', code: 'KR'},
			{ name: 'Australia', code: 'AU'},
			{ name: 'South Africa', code: 'ZA'}
		];

		return {
			getCountries: function(){
				return countries;
			},

			getBoxOffice: function(){
				var countryCode = '';
				return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=20&country='+ countryCode +'&callback=JSON_CALLBACK&apikey='+ API_KEY);
			}
		};
	}])

// api key: hnk4j9zjqxj278dtcragxmdm (waiting for approval)

// use random api key found online for now: vnava55vpau5rvt85b46vgzg