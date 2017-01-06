(function (angular){
    angular.module ('plumo-tasks').component(
        'plumoNewTask',{
            bindings:{
                house:'='
            },
            templateUrl:'views/plumo-tasks/new-task.html',
            controller: Controller 
        });
    
    Controller.$inject=[]
    function Controller() {
        var $ctrl=this;
        $ctrl.newTask=null;

        $ctrl.saveTask = function (task) {
            TasksService.saveTask(task).then(function (data) {
                $ctrl.task = data;
            }, function (response) {
                console.log(response);
            });
        };

        $ctrl.addTask = function (task){
            $ctrl.house.tasks.push(angular.copy(task));
            $ctrl.newTask=null;
        };

        $ctrl.displayNewTask = function (){
            $ctrl.newTask={
                name: '',
                room: '',
                date: '',
                user:''
            };
        }
    }

})(angular);