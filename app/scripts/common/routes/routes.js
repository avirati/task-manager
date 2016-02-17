'use strict'

/**
 * @author Avinash Verma
 *
 * Governs routing in the App
 *
 * @example N/A
 * @param N/A
 */
angular.module('taskManagerApp.routes')
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('taskManager', {
				url: "",
				templateUrl: 'views/pages/task-manager.html',
				controller: 'ctrl.taskManager'
			});
	}]);
