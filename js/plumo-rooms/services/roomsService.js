(function (angular) {
    angular.module('plumo-rooms').factory('RoomsService',Factory);
    Factory.$inject = ['$resource'];
    function Factory($resource) {
        return $resource('http://localhost:8000/room/:id',{id :'@id'});
    }
})(angular)