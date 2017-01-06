(function(angular){
    
    angular.module('plumo-tasks').config(Config);

    Config.$inject=["$stateProvider","$urlRouterProvider"]
    function Config($stateProvider, $urlRouterProvider){
        $stateProvider.state('app.tasks', {
            url:"/tasks",
            templateUrl:"views/plumo-tasks/index.html",
            controller:"TasksController",
            controllerAs:"$ctrl",
            resolve: {
                tasks:['TasksService',function(TasksService){
                    return TasksService.getTasks();
                }]
            }
        });
    }
    
})(angular);