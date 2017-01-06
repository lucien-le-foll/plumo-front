(function(angular){
    
    angular.module('plumo-rooms').component('plumoRoomsEdit',{

    	bindings: {
    		rooms:'='
    	},

    	templateUrl:'views/plumo-rooms/edit.html'
    	controller:'RoomsEditCtrl'

    });

    // TODO, embarquer le controller directement dans le component

    
})(angular);