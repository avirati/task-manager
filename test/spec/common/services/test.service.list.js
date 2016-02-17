'use strict';


describe("Unit: Testing Services", function () {

	describe("List Service:", function () {
		var List;

		beforeEach(module('taskManagerApp.services'));

		beforeEach( inject( function (_List_) {
			List = _List_;
		}));

		it('should contain a List Service', function () {
			expect(List).not.toEqual(null);
		});

		it('should have an empty array', function () {
			expect(List).toEqual([]);
		});

	});
});