angular.
	module('order').
	component('order', {
		templateUrl: 'store/order/order.template.html',
		controller: ['Order',
			function OrderController(Order) {
				var self = this; 
				self.order = Order.get({orderId: 0});
				
				self.inputid = {
					id: ''
				};
				
				self.register = function() {
					console.log('input captured', self.inputid);
					self.order = Order.get({orderId: self.inputid.id});
				};
			}
		]
	});