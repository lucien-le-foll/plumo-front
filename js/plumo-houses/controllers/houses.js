(function (angular) {
    angular.module('plumo-houses').controller('HousesController',Controller);

    Controller.$inject = ['houses'];
    function Controller(houses) {
        var $ctrl = this;
        
        $ctrl.houses = houses;
    }




})(angular);