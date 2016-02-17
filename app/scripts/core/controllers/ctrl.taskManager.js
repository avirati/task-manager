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
		window.scope = $scope;
		//Scope Variables
		angular.extend($scope, {
			List: List,
			sortableOptions: {
				update: function(e, ui) {

				},
				receive: function(e, ui) {

				},
				connectWith: ".group",
				revert: true
			}
		});

		//Scope methods
		angular.extend($scope, {
			deleteList: function (list_index) {
				List.splice(list_index, 1);
				//Persist the changes
				List.persist();
			},
			addTask: function (list_index) {
				List[list_index].tasks.push({
					title: '',
					description: ''
				})
				//Persist the changes
				List.persist();
			},
			deleteTask: function (list_index, task_index) {
				List[list_index].tasks.splice(task_index, 1);
				//Persist the changes
				List.persist();
			}
		})

	}]);
