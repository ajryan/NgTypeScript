module NgTypeScript.Controllers {
    'use strict';

    export interface HomeScope extends ng.IScope {
        user: NgTypeScript.Template.Models.User;
    }

    export class HomeCtrl {
        static $inject = ['$scope'];

        constructor(private $scope: HomeScope) {
            $scope.user = {
                FirstName: null,
                LastName: null,
                UserName: null,
                Age: null
            };
        }
    }
}