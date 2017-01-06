(function (angular) {
    angular.module('plumo-users').factory('UsersServices',Factory);
    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            getUsers : function(){
                
            }
        };
    }
})(angular)