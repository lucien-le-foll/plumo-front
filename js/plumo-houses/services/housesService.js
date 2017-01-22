(function (angular) {

    angular.module('plumo-houses').factory('HousesService', Factory);

    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            getCurrentHouse: function () {
                return HTTPClient.get('/user/house').then(function (response) {
                    return response.data;
                    console.log(data);
                }, function (response) {
                    return response;
                });
            },
            saveHouse: function (house) {
                // TODO intégrer l'ajout de pièces à la création
                var httpObject = angular.copy(house);
                delete httpObject.id;
                if (house.id!==null) {
                    return HTTPClient.put('/house/' + house.id, httpObject).then(function (response) {
                        return response.data;
                    });
                }
                else {
                    return HTTPClient.post('/house', httpObject).then(function (response) {
                        return response.data;
                    });
                }
            }
        };
    }
})(angular);