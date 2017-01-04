(function (angular) {

    angular.module('plumo').config(Config);

    Config.$inject = ["$stateProvider", "$urlRouterProvider"]
    function Config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('blank', {
            abstract: true,
            url: '',
            templateUrl: "views/common/blank.html"
        });

        $stateProvider.state('blank.landing', {
            url: "/",
            templateUrl: "views/plumo/landing.html"
        });

        $stateProvider.state('app', {
            abstract: true,
            url: '',
            templateUrl: "views/common/app.html"
        });
    }

})(angular);