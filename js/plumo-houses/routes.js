(function(angular){
    
    angular.module('plumo-houses').config(Config);

    Config.$inject=["$stateProvider","$urlRouterProvider"]
    function Config($stateProvider, $urlRouterProvider){
        $stateProvider.state('app.houses', {
            url:"/houses",
            templateUrl:"views/plumo-houses/index.html",
            controller:"HousesController",
            controllerAs:"$ctrl",
            resolve: {
                houses:['HousesService',function(HousesService){
                    return HousesService.query();
                }]
            }
        });
    }
    
})(angular);