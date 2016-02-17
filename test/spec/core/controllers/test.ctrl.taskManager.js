'use strict';

describe("Unit: Testing Controllers", function () {

	describe("TaskManager Controller:", function () {
		var $scope, createController, List;

		beforeEach(module('taskManagerApp'));

		beforeEach(inject(function ($rootScope, _$controller_, _List_) {

			List = _List_;

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

		it('should check if List service was injected', function () {
			createController();
			expect($scope.List).toEqual(List);
		});

		it('should check if deleteList() works', function () {
			createController();
			expect($scope.List.length).toEqual(0);
			List.push({
				name: 'List Name',
				tasks: []
			})
			expect($scope.List.length).toEqual(1);
			$scope.deleteList(0);
			expect($scope.List.length).toEqual(0);
		});

		it('should check if addTask() works', function () {
			createController();
			expect($scope.List.length).toEqual(0);
			List.push({
				name: 'List Name',
				tasks: []
			})
			expect($scope.List.length).toEqual(1);
			$scope.addTask(0);
			expect($scope.List.length).toEqual(1);
			expect($scope.List[0].tasks.length).toEqual(1);
		});
	});
});