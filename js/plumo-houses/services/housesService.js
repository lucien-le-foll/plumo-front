(function (angular) {

    angular.module('plumo-houses').factory('HousesService', Factory);

    Factory.$inject = ['$http', 'API_URL'];
    function Factory($http, API_URL) {
        var housesService = {};

        housesService.getHouses = function () {
            return $http.get(API_URL + '/house').then(function (response) {
                return response.data;
            })
        };

        return housesService;
    }
})(angular);