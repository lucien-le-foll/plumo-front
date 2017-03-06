(function (angular) {

    angular.module('plumo-houses').controller('HousesController', Controller);

    Controller.$inject = ['$state', 'house', 'HousesService'];
    function Controller($state, house, HousesService) {
        var $ctrl = this;

        $ctrl.house = house;
        $ctrl.houseEdit = false;

        $ctrl.saveHouse = function (house) {
            HousesService.saveHouse(house).then(function (response) {
                $ctrl.house = response.data;
            });
        };

        $ctrl.editHouse = function () {
            if ($ctrl.houseEdit) {
                HousesService.saveHouse($ctrl.house).then(function (response) {
                    $ctrl.house = response.data;
                    $ctrl.houseEdit = false;
                });
            } else {
                $ctrl.houseEdit = true;
            }
        };

        $ctrl.leaveHouse = function () {
            swal({
                    title: "Attention",
                    text: "Vous allez quitter la maison",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirmer",
                    cancelButtonText: "Annuler"
                },
                function () {
                    HousesService.leaveHouse().then(function (response) {
                        $ctrl.house = undefined;
                        $state.go('app.house');
                    })
                });
        };
    }

})(angular);