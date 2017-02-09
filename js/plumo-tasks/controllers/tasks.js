(function (angular) {
    angular.module('plumo-tasks').controller('PlumoTasksController', Controller);

    Controller.$inject = ['tasks'];
    function Controller(tasks) {
        var $ctrl = this;
        $ctrl.tasks = tasks;
        $ctrl.now = moment().format();

        $ctrl.timeTo = function (date) {
            return moment().to(date);
        };

        $ctrl.isExpired = function (date) {
            return moment(date).isBefore($ctrl.now);
        };
    }
})(angular);