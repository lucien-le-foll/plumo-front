(function(angular){
    
    angular.module('plumo-houses').config(Config);

    Config.$inject=["$stateProvider","$urlRouterProvider"]
    function Config($stateProvider, $urlRouterProvider){
        $stateProvider.state('app.house', {
            url:"/house",
            templateUrl:"views/plumo-houses/index.html",
            controller:"HousesController",
            controllerAs:"$ctrl",
            resolve: {
                house : ['HousesService',function(HousesService){
                    return HousesService.getUserHouse().then(function(data){
                        return data;
                    }, function(response){
                        return null;
                    });
                }]
            }
        });
    }
    
})(angular);