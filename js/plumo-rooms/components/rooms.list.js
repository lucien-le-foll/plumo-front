(function (angular) {

    angular.module('plumo-rooms').component('plumoRoomsList', {
        bindings: {
            rooms: '='
        },
        templateUrl: 'views/plumo-rooms/list.html',
        controller: Controller
    });

    Controller.$inject = ['RoomsService'];
    function Controller(RoomsService) {
        var $ctrl = this;

        $ctrl.displayEditRoom = false;
        $ctrl.editRoom = {};

        $ctrl.editRoom = function (room) {
            $ctrl.displayEditRoom = true;
            $ctrl.editRoom = room;
        }

        $ctrl.saveRoom = function (room) {
            if (_.find($ctrl.rooms, room) !== -1) {
                _.replace($ctrl.rooms, room);
            }
            else {
                $ctrl.rooms.push(room);
            }

            $ctrl.editRoom = {};
            $ctrl.displayEditRoom = false;
        }
    };
})(angular);