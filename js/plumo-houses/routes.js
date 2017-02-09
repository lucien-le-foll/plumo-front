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
                    return HousesService.getHouse().then(function (response) {
                        return response.data;
                    }, function(error){
                        if(error.code == 404){
                            return undefined;
                        } else {
                            $state.go('blank.landing');
                        }
                    });
                }]
            }
        });
    }

})(angular);