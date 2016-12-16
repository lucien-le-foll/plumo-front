(function(angular){

    angular.module('plumo-auth').config(Config);
    
    Config.$inject = ['$stateProvider'];
    function Config($stateProvider){
        $stateProvider.state('app.login', {
            url:"/login",
            templateUrl:"views/plumo-auth/login.html",
            controller: "AuthController",
            controllerAs: "$ctrl"
        });

        $stateProvider.state('app.register', {
            url:"/register",
            templateUrl:"views/plumo-auth/register.html"
        });
    }

})(angular);