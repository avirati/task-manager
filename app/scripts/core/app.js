'use strict';

angular.module('taskManagerApp.directives', []);
angular.module('taskManagerApp.services', ['ngStorage']);
//angular.module('taskManagerApp.filters', []);
//angular.module('taskManagerApp.factories', []);
angular.module('taskManagerApp.routes', ['ui.router']);
angular.module('taskManagerApp.angular-materialize', ['ui.materialize']);

angular.module('taskManagerApp', [
	'taskManagerApp.directives',
	'taskManagerApp.services',
	//'taskManagerApp.filters',
	//'taskManagerApp.factories',
	'taskManagerApp.routes',
	'taskManagerApp.angular-materialize',
	'ui.sortable'
]);
