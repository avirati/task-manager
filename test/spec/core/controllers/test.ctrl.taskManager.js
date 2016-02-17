'use strict';

describe("Unit: Testing Controllers", function () {

	describe("TaskManager Controller:", function () {
		var $scope, $localStorage, createController, List;

		beforeEach(module('taskManagerApp'));

		beforeEach(inject(function ($rootScope, _$controller_, _List_, _$localStorage_) {

			List = _List_;
			$localStorage = _$localStorage_;

			$scope = $rootScope.$new();
			$localStorage.$reset();

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

			expect($scope.List.length).toEqual(1);

			List.push({
				name: 'List Name',
				tasks: []
			})

			expect($scope.List.length).toEqual(2);

			$scope.deleteList(1);

			expect($scope.List.length).toEqual(1);

			expect($scope.List).toEqual($localStorage.list);
		});

		it('should check if addTask() works', function () {
			createController();

			expect($scope.List.length).toEqual(1);

			List.push({
				name: 'List Name',
				tasks: []
			})

			expect($scope.List.length).toEqual(2);

			$scope.addTask(1);

			expect($scope.List.length).toEqual(2);
			expect($scope.List[1].tasks.length).toEqual(1);

			expect($scope.List).toEqual($localStorage.list);
		});

		it('should check if removeTask() works', function () {
			createController();

			expect($scope.List.length).toEqual(1);

			List.push({
				name: 'List Name',
				tasks: []
			})

			expect($scope.List.length).toEqual(2);

			$scope.addTask(1);

			expect($scope.List.length).toEqual(2);
			expect($scope.List[0].tasks.length).toEqual(1);

			$scope.deleteTask(1, 0);

			expect($scope.List.length).toEqual(2);
			expect($scope.List[1].tasks.length).toEqual(0);

			expect($scope.List).toEqual($localStorage.list);
		});
	});
});