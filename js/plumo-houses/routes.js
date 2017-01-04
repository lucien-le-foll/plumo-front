(function (angular) {

    angular.module('plumo-houses').config(Config);

    Config.$inject = ["$stateProvider"]
    function Config($stateProvider) {

        $stateProvider.state('app.house', {
            url: "/house",
            templateUrl: "views/plumo-houses/index.html",
            controller: "HousesController",
            controllerAs: "$ctrl",
            resolve: {
                house: ['HousesService', function (HousesService) {
                    return HousesService.getCurrentHouse().then(function (data) {
                        return data;
                    }, function (response) {
                        alert('ça n\'a pas fonctionné');
                    });
                }]
            }
        });
    }

})(angular);