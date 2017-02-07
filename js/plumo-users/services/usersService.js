(function (angular) {
    angular.module('plumo-users').factory('UsersService', Factory);
    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            getResearchedUsers: function (keyword) {
                return HTTPClient.get('/user/'+keyword);
            },
            addUserToHouse: function(id) {
                return HTTPClient.get('/house/join/'+id);
            }
        }
    }
})(angular);