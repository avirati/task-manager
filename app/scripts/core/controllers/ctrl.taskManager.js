'use strict';

/**
 * @author Avinash Verma
 *
 * Controller for the main view
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 */

angular.module('taskManagerApp')
	.controller('ctrl.taskManager', [ '$scope', 'List', function ( $scope, List ) {

		//Scope Variables
		angular.extend($scope, {
			List: List
		});


	}]);
