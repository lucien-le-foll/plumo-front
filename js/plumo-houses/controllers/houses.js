(function (angular) {
    angular.module('plumo-houses').controller('HousesController',Controller);

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;
        
        $ctrl.houses = houses;
        
    }




})(angular);