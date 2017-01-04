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
                rooms:['RoomsService',function(RoomsService){
                    return RoomsService.query();
                }]
            }
        });

        $stateProvider.state('app.room.item', {
            url:"/room/:id",
            templateUrl:"views/plumo-rooms/item.html",
            controller:"RoomItemController",
            controllerAs:"$ctrl",
            resolve: {
                room:[RoomsService,function(RoomsService){
                    return RoomsService.query();
                }]
            }
            
        }])
    }
}
}

})(angular);