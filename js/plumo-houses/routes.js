(function (angular) {

    angular.module('plumo-houses').config(Config);

    Config.$inject = ["$stateProvider"];
    function Config($stateProvider) {

        $stateProvider.state('app.house', {
            url: "/house",
            templateUrl: "views/plumo-houses/index.html",
            controller: "HousesController",
            controllerAs: "$ctrl",
            resolve: {
                house: ['$state', 'HousesService', function ($state, HousesService) {
                    return HousesService.getHouse().then(function (data) {
                        return data;
                    }, function(error){
                        console.log(error);
                        if(error.code == 404){
                            return undefined;
                        } else {
                            $state.go('blank.landing');
                        }
                    });
                }]
            }
        });

        $stateProvider.state('app.house.edit', {
            url: "/edit",
            templateUrl: "views/plumo-houses/edit.html",
            controller: "HousesEditController",
            controllerAs: "$ctrl",
        });
    }

})(angular);