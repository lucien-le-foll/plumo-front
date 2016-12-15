(function (angular) {
    angular.module('plumo-rooms').controller('RoomsController',Controller);

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;
        
        $ctrl.rooms = rooms;
        
    }




})(angular);