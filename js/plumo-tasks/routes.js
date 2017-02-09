(function (angular) {

    angular.module('plumo-tasks').config(Config);

    Config.$inject = ['$stateProvider'];
    function Config($stateProvider) {
        $stateProvider.state('app.tasks', {
            url: '/tasks',
            templateUrl: 'views/plumo-tasks/controllers/tasks.html',
            controller: 'PlumoTasksController',
            controllerAs: '$ctrl',
            resolve: {
                tasks: ['TasksService', function (TasksService) {
                    return TasksService.getUserTasks().then(function(response){
                        return response.data;
                    })
                }]
            }
        });
    }

})(angular);