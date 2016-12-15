(function (angular) {
    angular.module('plumo-tasks').controller('TasksController',Controller);

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;
        
        $ctrl.tasks = tasks;
        
    }




})(angular);