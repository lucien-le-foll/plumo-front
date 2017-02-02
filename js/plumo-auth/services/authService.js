(function (angular) {

    angular.module('plumo-auth')

        .factory('Auth', function ($http, $q, AuthToken, API_URL) {

            // create auth factory object
            var authFactory = {};

            // log a user in
            authFactory.login = function (email, password) {

                // return the promise object and its data
                return $http.post(API_URL + '/login', {
                        email: email,
                        password: password
                    })
                    .then(function (response) {
                        AuthToken.setToken(response.data.token);
                        return response.data;
                    });
            };

            // log a user out by clearing the token
            authFactory.logout = function () {
                // clear the token
                AuthToken.setToken();
            };

            // check if a user is logged in
            // checks if there is a local token
            authFactory.isLoggedIn = function () {
                if (AuthToken.getToken())
                    return true;
                else
                    return false;
            };

            // get the logged in user
            authFactory.getUser = function () {
                if (AuthToken.getToken())
                    return $http.get('/api/me', {cache: true});
                else
                    return $q.reject({message: 'User has no token.'});
            };

            // return auth factory object
            return authFactory;

        })

        // ===================================================
        // factory for handling tokens
        // inject $window to store token client-side
        // ===================================================
        .factory('AuthToken', function ($window) {

            var authTokenFactory = {};

            // get the token out of local storage
            authTokenFactory.getToken = function () {
                return $window.localStorage.getItem('token');
            };

            // function to set token or clear token
            // if a token is passed, set the token
            // if there is no token, clear it from local storage
            authTokenFactory.setToken = function (token) {
                if (token)
                    $window.localStorage.setItem('token', token);
                else
                    $window.localStorage.removeItem('token');
            };

            return authTokenFactory;

        })

        // ===================================================
        // application configuration to integrate token into requests
        // ===================================================
        .factory('AuthInterceptor', function ($q, $location, AuthToken) {

            var interceptorFactory = {};

            // this will happen on all HTTP requests
            interceptorFactory.request = function (config) {

                // grab the token
                var token = AuthToken.getToken();

                // if the token exists, add it to the header as x-access-token
                if (token)
                    config.headers['Authorization'] = 'Bearer '+token;

                return config;
            };

            // happens on response errors
            interceptorFactory.responseError = function (response) {
                alert('erreur HTTP');
                $location.path('/house');

                return $q.reject(response);
            };

            return interceptorFactory;

        });
})(angular);