(function (angular) {

    angular.module('plumo-auth').controller('AuthController', Controller);

    Controller.$inject = ['Auth'];
    function Controller(Auth) {
        var $ctrl = this;

        $ctrl.attemptLogin = function (email, password) {
            console.log(Auth.login(email, password));
        }
    }

})(angular);