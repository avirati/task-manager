'use strict';

describe("Unit: Testing Controllers", function () {

	describe("TaskManager Controller:", function () {
		var $scope, createController;

		beforeEach(module('taskManagerApp'));

		beforeEach(inject(function ($rootScope, _$controller_) {

			$scope = $rootScope.$new();

			createController = function() {
				return _$controller_('ctrl.taskManager', {
					$scope: $scope
				});
			};
		}));

		it('should check if scope was created', function () {
			createController();
			expect($scope).not.toEqual(null);
		});
	});
});