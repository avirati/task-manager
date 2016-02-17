'use strict';

describe("Unit: Testing Directives", function () {

	describe("Footer Element:", function () {
		var $scope, elem;

		beforeEach(module('taskManagerApp.directives'));
		beforeEach(module('htmlTemplates'));

		beforeEach( inject( function ($compile, $rootScope) {

			$scope = $rootScope.$new();

			elem = $compile('<custom-footer></custom-footer>')($scope);
			$rootScope.$digest();

		}));

		it('should check if the element was loaded', function () {
			expect(elem).not.toEqual(null);
		});

		it('should check whether this project was made with ♥ ;)', function () {
			expect(elem.find('div.footer-copyright').html().trim().indexOf('♥')).toBeGreaterThan(-1);
		});
	});
});