(function(angular){
    
    angular.module('plumo', [
        'ui.router',
        'ngResource',
        'plumo-auth',
        'plumo-houses',
        'plumo-tasks',
        'plumo-rooms'
    ])
    .constant('API_URL', 'http://plumoapi.codeandroses.com/api');
    
})(angular);