'use strict'

/**
 * @author Avinash Verma
 *
 * Maintains the List
 * @example N/A
 *
 * @param N/A
 */
angular.module('taskManagerApp.services')
	.service('List', [ '$localStorage', function ($localStorage) {
		var _list = $localStorage.list || [{
					tasks: [{}]
				}];

		_list.constructor.prototype.persist = function () {
			$localStorage.list = _list;
		};

		return _list;
	}]);
