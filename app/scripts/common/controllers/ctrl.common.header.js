'use strict';

/**
 * @author Avinash Verma
 *
 * Header Controller for <custom-header></custom-header> element
 *
 * @example N/A
 *
 * @param {Scope} $scope: scope of the container
 */

angular.module('taskManagerApp')
	.controller('ctrl.common.header', [ '$scope', 'List', function ( $scope, List ) {
		//Scope Variables
		angular.extend($scope, {

		})

		//Scope methods
		angular.extend($scope, {
			//Adds a list object to the lists
			addList: function () {
				List.push({
					name: '',
					tasks: []
				})
			}
		})
	}]);
