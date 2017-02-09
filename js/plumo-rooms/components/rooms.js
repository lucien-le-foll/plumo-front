(function (angular) {

    angular.module('plumo-rooms').component('plumoRoomsComponent', {
        bindings: {
            house: '='
        },
        templateUrl: 'views/plumo-rooms/components/rooms.html',
        controller: Controller
    });

    Controller.$inject = ['TasksService','RoomsService'];
    function Controller(TasksService, RoomsService) {
        var $ctrl = this;
        $ctrl.newTask = null;
        $ctrl.newRoom = null;

        $ctrl.performTask = function (task) {
            TasksService.performTask(task).then(function(response){
                task.done = response.data.done;
            });
        }

        $ctrl.displayNewTask = function(){
            $ctrl.newTask = {
                date : new Date()
            }
        }
        $ctrl.displayNewRoom = function(){
            $ctrl.newRoom = {
            }
        }

        $ctrl.saveTask = function (task, room) {
            task.date=moment(task.date).format();
            TasksService.saveTask(task).then(function (response) {
                task.date = new Date();
                $ctrl.newTask = null;
                room.task.push(response.data);
            });
        };

        $ctrl.saveRoom = function (room) {
            RoomsService.saveRoom(room).then(function (response) {
                $ctrl.newRoom = null;
                $ctrl.house.rooms.push(response.data);
            });
        };
    }
})(angular);