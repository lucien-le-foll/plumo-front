(function (angular) {
    angular.module('plumo-tasks').controller('TasksController', Controller);

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;

        $ctrl.house.tasks = [{}];
        $ctrl.newTask = null;

        $ctrl.saveTask = function (task) {
            HousesService.saveTask(task).then(function (data) {
                $ctrl.task = data;
            }, function (response) {
                console.log(response);
            });
        }
        $ctrl.addTask = function (task) {

        }
        $ctrl.displayNewTask = function () {
            $ctrl.newTask = {
                name: '',
                description: ''
            };
        }
    }
})(angular);