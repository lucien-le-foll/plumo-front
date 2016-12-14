(function(angular){
    
    angular.module('plumo').config(Config);

    Config.$inject=["$stateProvider","$urlRouterProvider"]
    function Config($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");

        $stateProvider.state('app', {
            abstract:true,
            url:"",
            templateUrl:"views/common/app.html"
        });

        $stateProvider.state('app.landing', {
            url:"/",
            templateUrl:"views/plumo/landing.html"
        });

        $stateProvider.state('app.login', {
            url:"/",
            templateUrl:"views/plumo/login.html"
        });
    }
    
})(angular);