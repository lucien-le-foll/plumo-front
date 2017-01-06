(function (angular) {

    angular.module('plumo-houses').controller('HousesController', Controller);

    Controller.$inject = ['house', 'HousesService'];
    function Controller(house, HousesService) {
        var $ctrl = this;

        $ctrl.house = house;
        $ctrl.house.rooms=[{name:'salle de bain', description:'l\'endroit où on se lave'}];
        $ctrl.house.tasks = [];
        $ctrl.newRoom=null;

        $ctrl.saveHouse = function (house) {
            HousesService.saveHouse(house).then(function (data) {
                $ctrl.house = data;
            }, function (response) {
                console.log(response);
            });
        }
        $ctrl.addRoom = function (room){
            $ctrl.house.rooms.push(angular.copy(room));
            $ctrl.newRoom=null;
        }
        $ctrl.displayNewroom = function (){
            $ctrl.newRoom={
                name: '',
                description: ''
            };
        }
    }


})(angular);