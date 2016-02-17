'use strict';

describe("Unit: Testing Directives", function () {

	describe("<list-card></list-card> Element:", function () {
		var $scope, elem;

		beforeEach(module('taskManagerApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = $compile('<list-card></list-card>')($scope);
			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(elem).not.toEqual(null);
		});
	});
});