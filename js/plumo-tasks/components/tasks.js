(function (angular) {

    angular.module('plumo-tasks').component('plumoTasksComponent', {
        bindings: {
            house: '='
        },
        templateUrl: 'views/plumo-tasks/components/tasks.html',
        controller: Controller
    });

    Controller.$inject = ['TasksService'];
    function Controller(TasksService) {
        var $ctrl = this;

        $ctrl.newTask = null;

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

        $ctrl.saveTask = function (task) {
            task.date=moment(task.date).format();
            TasksService.saveTask(task).then(function (data) {
                task.date = new Date();
                $ctrl.newTask = null;
            });
        };
    }
})(angular);