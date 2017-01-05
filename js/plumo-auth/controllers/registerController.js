(function (angular) {

    angular.module('plumo-auth').controller('RegisterController', Controller);

    Controller.$inject = ['$state', 'RegisterService'];
    function Controller($state, RegisterService) {
        var $ctrl = this;

        $ctrl.register = function(user){
            RegisterService.register(
                user.name,
                user.email,
                user.password
            ).then(function(response){
                $state.go('app.house');
            }, function(response){
                console.log(response);
                $state.go('blank.login');
            });
        }
    }
    
})(angular);