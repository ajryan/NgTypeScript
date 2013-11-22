module NgTypeScript {
    'use strict';

    export var App = angular.module('MyApp', ['ngResource', 'ngRoute']);

    App.config([
        '$routeProvider',
        ($routeProvider: ng.route.IRouteProvider)=> {
            $routeProvider
                .when('/home', {
                    controller: NgTypeScript.Controllers.HomeCtrl,
                    templateUrl: '/app/partials/home.html'
                })
                .otherwise({
                    redirectTo: '/home'
                });
        }
    ]);
}