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

		//Scope methods
		angular.extend($scope, {
			deleteList: function (list_index) {
				List.splice(list_index, 1);
			},
			addTask: function (list_index) {
				List[list_index].tasks.push({
					title: '',
					description: ''
				})
			}
		})

	}]);
