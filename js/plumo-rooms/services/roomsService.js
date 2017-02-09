(function (angular) {
    angular.module('plumo-rooms').factory('RoomsService', Factory);
    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            saveRoom: function (room) {
                return HTTPClient.post('/room', room);
            }
        };
    }
})(angular);