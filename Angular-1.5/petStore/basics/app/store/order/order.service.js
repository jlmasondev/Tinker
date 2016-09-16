angular.
	module('order').
	factory('Order', ['$resource',
	   function($resource) {
			return $resource('http://petstore.swagger.io/v2/store/order/:orderId', {}, {
				query: {
					method: 'GET',
					params: {orderId: 'theId'},
					isArray: true
				}
			});
		}
	]);