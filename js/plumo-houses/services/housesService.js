(function (angular) {

    angular.module('plumo-houses').factory('HousesService', Factory);

    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            getCurrentHouse: function () {
                return HTTPClient.get('/user/house').then(function (response) {
                    return response.data;
                }, function (response) {
                    return response;
                });
            },
            saveHouse: function (house) {
                var httpObject = angular.copy(house);
                console.log(house);
                if (httpObject.id!==null) {
                    return HTTPClient.put('/house/' + httpObject.id, httpObject).then(function (response) {
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