'use strict';

/**
 * @author Avinash Verma
 *
 * Renders header of the Application
 * @example
 * <custom-header></custom-header> //it renders the header template
 *
 * @param N/A
 */
angular.module('taskManagerApp.directives')
	.directive('customHeader', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/header.html',
			controller: 'ctrl.common.header'
		}
	}]);