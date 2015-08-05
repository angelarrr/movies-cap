'use strict';

angular.module('movServices', [])
	.value('version', '1.0')

	.constant('API_KEY', 'hnk4j9zjqxj278dtcragxmdm')

	.factory('appFactory', ['$http', 'API_KEY', function($http, API_KEY){
		var countries = [
			{ name: 'USA', code: 'US' },
			{ name: 'South Korea', code: 'KR'}
		];

		return {
			getCountries: function(){
				return countries;
			}
		};
	}])