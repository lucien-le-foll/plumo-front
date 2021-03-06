(function (angular) {

    angular.module('plumo-houses').factory('HousesService', Factory);

    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            getHouse: function () {
                return HTTPClient.get('/house');
            },
            saveHouse: function (house) {
                var httpObject = angular.copy(house);
                delete httpObject.id;
                if (house.id) {
                    return HTTPClient.put('/house/' + house.id, httpObject);
                } else {
                    return HTTPClient.post('/house', httpObject);
                }
            },
            leaveHouse: function(){
                return HTTPClient.get('/house/leave');
            }
        };
    }
})(angular);