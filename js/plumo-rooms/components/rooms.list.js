(function(angular){
    
    angular.module('plumo-rooms').component('plumoRoomsList',{

    	bindings: {
    		rooms:'='
    	},

    	templateUrl:'views/plumo-rooms/list.html'
    	controller: Controller

    });

    Controller.$inject = ['RoomsService'];
    function Controller(RoomsService){
    	var $ctrl = this;

    	$ctrl.deleteRoom = function(room){
    		RoomsService.deleteRoom(room).then(function(response){
    			alert('La pièce est supprimée')
    		})
    	}

    	$ctrl.editRoom = function(room){
    		// plutôt demander l'affichage du component qui à son tour appellera la fonction save() sur le RoomsService
    		RoomsService.editRoom(room).then(function(response){
    		})
    	}
    }
    
})(angular);