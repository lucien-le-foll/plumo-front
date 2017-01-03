(function (angular) {

    angular.module('plumo-auth').controller('AuthController', Controller);

    Controller.$inject = ['Auth', '$state'];
    function Controller(Auth, $state) {
        var $ctrl = this;

        $ctrl.attemptLogin = function (email, password) {
            Auth.login(email, password).then(function(data){
                $state.go('app.house');
            }, function(response){
                console.log(response);
            });
        }
    }

})(angular);