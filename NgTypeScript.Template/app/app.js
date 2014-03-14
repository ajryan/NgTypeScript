var NgTypeScript;
(function (NgTypeScript) {
    'use strict';

    NgTypeScript.App = angular.module('MyApp', ['ngResource', 'ngRoute']);

    NgTypeScript.App.config([
        '$routeProvider',
        function ($routeProvider) {
            $routeProvider.when('/home', {
                controller: NgTypeScript.Controllers.HomeCtrl,
                templateUrl: '/app/partials/home.html'
            }).otherwise({
                redirectTo: '/home'
            });
        }
    ]);
})(NgTypeScript || (NgTypeScript = {}));
//# sourceMappingURL=app.js.map
