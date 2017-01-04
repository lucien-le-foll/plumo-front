(function (angular) {
    'use strict';

    angular.module('plumo').factory('HTTPClient', Factory);

    Factory.$inject = ['$http', 'API_URL'];
    function Factory($http, API_URL) {
        return {
            get: get,
            post: post,
            put: put,
            delete: remove
        };

        function get(endpoint, options) {
            options = angular.isObject(options) ? options : {};
            options.paramSerializer = '$httpParamSerializerJQLike';

            return getRequest('GET', endpoint, null, options);
        }

        function post(endpoint, params, options) {
            return getRequest('POST', endpoint, params, options);
        }

        function put(endpoint, params, options) {
            return getRequest('PUT', endpoint, params, options);
        }

        function remove(endpoint, params, options) {
            return getRequest('DELETE', endpoint, params, options);
        }

        function getRequest(method, endpoint, data, options) {
            var config = angular.extend({}, options, {
                method: method,
                url: API_URL + endpoint,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (angular.isDefined(data)) {
                config.data = angular.toJson(data);
            }

            return $http(config);
        }
    }

})(angular);