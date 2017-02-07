(function (angular) {

    angular.module('plumo-tasks').component('plumoTasksComponent', {
        bindings: {
            tasks: '='
        },
        templateUrl: 'views/plumo-tasks/components/tasks.html',
        controller: Controller
    });

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;
    }
})(angular);