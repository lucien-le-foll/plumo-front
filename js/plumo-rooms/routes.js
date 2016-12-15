(function(angular){
    
    angular.module('plumo-rooms').config(Config);

    Config.$inject=["$stateProvider","$urlRouterProvider"]
    function Config($stateProvider, $urlRouterProvider){
        $stateProvider.state('app.rooms', {
            url:"/rooms",
            templateUrl:"views/plumo-rooms/index.html",
            controller:"RoomsController",
            controllerAs:"$ctrl",
            resolve: {
                houses:['RoomsService',function(RoomsService){
                    return RoomsService.query();
                }]
            }
        });
    }
    
})(angular);