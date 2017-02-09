(function (angular) {

    angular.module('plumo-houses').controller('HousesController', Controller);

    Controller.$inject = ['$state', 'house', 'HousesService'];
    function Controller($state, house, HousesService) {
        var $ctrl = this;

        $ctrl.house = house;

        $ctrl.saveHouse = function (house) {
            HousesService.saveHouse(house).then(function (response) {
                $ctrl.house = response.data;
            });

        }

        $ctrl.leaveHouse = function() {
            HousesService.leaveHouse().then(function (response){ 
                $ctrl.house = undefined;         
                $state.go('app.house');
            })
        }
    }

})(angular);