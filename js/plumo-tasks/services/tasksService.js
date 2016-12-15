(function (angular) {
    angular.module('plumo-tasks').factory('TasksService',Factory);
    Factory.$inject = ['$resource'];
    function Factory($resource) {
        return $resource('http://localhost:8000/task/:id',{id :'@id'});
    }
})(angular)