'use strict';

describe("Unit: Testing Directives", function () {

	describe("Header Element:", function () {
		var $scope, elem;

		beforeEach(module('taskManagerApp'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = $compile('<custom-header></custom-header>')($scope);
			$rootScope.$digest();

			$scope = elem.scope();

		}));

		it('should check if the element was loaded', function () {
			expect(elem).not.toEqual(null);
		});

		it('should check whether header has "Task Manager" written', function () {
			expect(elem.find('a.brand-logo').html().trim()).toEqual('Task Manager');
		});

		it('should check if addList function is present', function () {
			expect($scope.addList).not.toEqual(undefined);
		});
	});
});