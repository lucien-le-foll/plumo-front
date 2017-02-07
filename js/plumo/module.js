(function (angular) {

    // déclaration du module application
    angular.module('plumo', [
            'ui.router',
            'ui.select',
            'plumo-auth',
            'plumo-houses',
            'plumo-tasks',
            'plumo-rooms',
            'plumo-users'
        ])
        .constant('API_URL', 'http://plumoapi.codeandroses.com/api')
        .config(function ($httpProvider, $qProvider) {
            // attach our auth interceptor to the http requests
            $httpProvider.interceptors.push('AuthInterceptor');
            $qProvider.errorOnUnhandledRejections(false);
        });

})(angular);