'use strict';

describe("Unit: Testing Controllers", function () {

	describe("Main Controller:", function () {
		var $scope, createController;

		beforeEach(module('taskManagerApp'));

		beforeEach(inject(function ($rootScope, _$controller_) {

			$scope = $rootScope.$new();

			createController = function() {
				return _$controller_('ctrl.main', {
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