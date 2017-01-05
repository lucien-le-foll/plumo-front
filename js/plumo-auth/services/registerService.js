(function (angular) {

    angular.module('plumo-auth').factory('RegisterService', Factory);

    Factory.$inject = ['HTTPClient', 'AuthToken'];
    function Factory(HTTPClient, AuthToken) {
        return {
            register: function (name, email, password) {
                console.log(email)
                return  HTTPClient.post('/user', {
                    name : name,
                    email : email,
                    password : password
                }).then(function(response){
                    AuthToken.setToken(response.data.token);
                    return response.data;
                }, function(response){
                    return response;
                });
            }
        }
    }

})(angular);