(function (angular) {
    angular.module('plumo-tasks').controller('PlumoTasksController', Controller);

    Controller.$inject = ['tasks', 'TasksService'];
    function Controller(tasks, TasksService) {
        var $ctrl = this;
        $ctrl.tasks = tasks;
        $ctrl.now = moment().format();

        $ctrl.timeTo = function (date) {
            return moment().to(date);
        };

        $ctrl.isExpired = function (date) {
            return moment(date).isBefore($ctrl.now);
        };

        $ctrl.performTask = function (task) {
            TasksService.performTask(task).then(function (response) {
                task.done = response.data.done;
            });
        };

        $ctrl.deleteTask = function (task) {
            TasksService.deleteTask(task).then(function (response) {
                _.remove($ctrl.tasks, {'id' : task.id});
            });
        };
    }
})(angular);