'use strict'

/**
 * @author Avinash Verma
 *
 * Renders footer of the Application
 * @example
 * <custom-footer></custom-header> //it renders the footer template
 *
 * @param N/A
 */
angular.module('taskManagerApp.directives')
	.directive('customFooter', [ function () {
		return {
			restrict: 'E',
			templateUrl: 'views/common/footer.html'
		}
	}]);
