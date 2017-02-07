(function (angular) {

    angular.module('plumo-rooms').component('plumoRoomsComponent', {
        bindings: {
            rooms: '='
        },
        templateUrl: 'views/plumo-rooms/components/rooms.html',
        controller: Controller
    });

    Controller.$inject = ['RoomsService'];
    function Controller(RoomsService) {
        var $ctrl = this;
    }
})(angular);