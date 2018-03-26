(function (angular) {
	'use strict';

	angular
		.module('ptt.utils.broadcast-helper')
		.factory('BroadcastHelper', ['$rootScope', BroadcastHelper]);

	function BroadcastHelper($rootScope) {
		var service = {};

		

		service.send = function (msg, data) {
			$rootScope.$broadcast(msg, data);
		};

		service.sendFrom = function (msg, data, scope) {
			if (!isScope(scope)) throw 'Invalid scope';

			scope.$broadcast(msg, data);
		};

		function isScope(scope) {
			return angular.isNumber(scope.$id) && angular.isObject(scope.$root);
		};

		return {
			send: service.send,
			sendFrom: service.sendFrom
		};
	};
})(window.angular);