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

        $ctrl.performTask = function (task) {
            TasksService.performTask(task).then(function(response){
                task.done = response.data.done;
            });
        }
    }
})(angular);