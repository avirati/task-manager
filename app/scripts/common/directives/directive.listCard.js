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
	.directive('listCard', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/list-card.html'
		}
	}]);
