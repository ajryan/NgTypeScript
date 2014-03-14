var NgTypeScript;
(function (NgTypeScript) {
    (function (Controllers) {
        'use strict';

        var HomeCtrl = (function () {
            function HomeCtrl($scope) {
                this.$scope = $scope;
                $scope.user = {
                    FirstName: null,
                    LastName: null,
                    UserName: null,
                    Age: null
                };
            }
            HomeCtrl.$inject = ['$scope'];
            return HomeCtrl;
        })();
        Controllers.HomeCtrl = HomeCtrl;
    })(NgTypeScript.Controllers || (NgTypeScript.Controllers = {}));
    var Controllers = NgTypeScript.Controllers;
})(NgTypeScript || (NgTypeScript = {}));
//# sourceMappingURL=home.js.map
