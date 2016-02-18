# Task Manager

Task Manager is a trello like app, which lets one maintain lists having multiple tasks.
[Demo]

![alt tag](https://raw.githubusercontent.com/avirati/task-manager/master/app/images/screen.png)

### Tech

Task Manager uses a number of open source projects to work properly:

* [AngularJS]
* [Angular Materialize]
* [Materialize]
* [Angular UI Sortable]
* [jQuery]
* [Jasmine]
* [Karma]


### Build

You need Grunt and Compass installed globally:

```sh
$ gem install compass 
$ npm install -g grunt
```

```sh
$ git clone https://github.com/avirati/task-manager task-manager
$ cd task-manager
$ npm install
$ npm install --dev (if you want to run tests) 
$ bower install
$ grunt
$ cd dist/
$ python -m SimpleHTTPServer <PORT>
```

### Run the project

```sh
open http://localhost:<PORT>
```

### Testing

```sh
$ npm install -g karma
$ cd test/
$ karma start
```

License
----

MIT


**Free Software, Hell Yeah!**


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Demo]: http://trellolike.herokuapp.com/
   [AngularJS]: https://angularjs.org/
   [Angular Materialize]: https://github.com/krescruz/angular-materialize
   [Materialize]: http://materializecss.com
   [Angular UI Sortable]: https://github.com/angular-ui/ui-sortable
   [jQuery]: https://jquery.com/
   [Jasmine]: http://jasmine.github.io/
   [Karma]: https://karma-runner.github.io/0.13/index.html