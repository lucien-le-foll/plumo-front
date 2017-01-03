(function (angular) {

    angular.module('plumo-houses').controller('HousesController', Controller);

    Controller.$inject = ['house', 'HousesService'];
    function Controller(house, HousesService) {
        var $ctrl = this;

        $ctrl.house = house;

        $ctrl.saveHouse = function (house) {
            HousesService.saveHouse(house).then(function (data) {
                $ctrl.house = data;
            }, function (response) {
                console.log(response);
            });
        }

    }

})(angular);