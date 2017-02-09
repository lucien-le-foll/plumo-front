(function (angular) {
    angular.module('plumo-tasks').factory('TasksService', Factory);
    Factory.$inject = ['HTTPClient'];
    function Factory(HTTPClient) {
        return {
            performTask: function (task) {
                return HTTPClient.get('/task/perform/' + task.id);
            },
            getUserTasks: function () {
                return HTTPClient.get('/task');
            }
        };
    }
})(angular);