(function (angular){
    angular.module ('plumo-tasks').component(
        'plumoListTasks',{
            bindings:{
                tasks:'='
            },
            templateUrl:'views/plumo-tasks/tasks-list.html'
        });

})(angular);