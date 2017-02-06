(function (angular) {

    angular.module('plumo-tasks').component('plumoTasksList', {
        bindings: {
            tasks: '='
        },
        templateUrl: 'views/plumo-tasks/components/list.html',
        controller: Controller
    });

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;
        console.log('coucou');
    }
})(angular);