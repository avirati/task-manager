'use strict'

/**
 * @author Avinash Verma
 *
 * Renders the list card element
 * @example
 * <list-card></list-card> //it renders the footer template
 *
 * @param N/A
 */
angular.module('taskManagerApp.directives')
	.directive('taskCard', [ function () {
		return {
			restrict: 'A',
			templateUrl: 'views/common/task-card.html'
		}
	}]);
