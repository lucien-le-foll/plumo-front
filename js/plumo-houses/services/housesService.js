(function (angular) {
    angular.module('plumo-houses').factory('HousesService',Factory);
    Factory.$inject = ['$resource'];
    function Factory($resource) {
        return $resource('http://localhost:8000/house/:id',{id :'@id'});
    }
})(angular)