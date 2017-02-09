(function (angular) {
    angular.module('plumo-rooms').controller('RoomsController',Controller);

    Controller.$inject = [];
    function Controller() {
        var $ctrl = this;
        
        $ctrl.rooms = rooms;
        
        $ctrl.oneAtATime = false;
        $ctrl.status = {
            isCustomHeaderOpen: false,
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $ctrl.house.tasks=[{}];  
        $ctrl.newTask=null;  

    }

})(angular);