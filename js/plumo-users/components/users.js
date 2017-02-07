(function (angular) {

    angular.module('plumo-users').component('plumoUsersComponent', {
        bindings: {
            house: '='
        },
        controller: Controller,
        templateUrl: 'views/plumo-users/components/users.html'
    });

    Controller.$inject = ['UsersService'];
    function Controller(UsersService) {
        var $ctrl = this;
        $ctrl.addUser = false;
        $ctrl.newUser = null;
        $ctrl.researchedUsers = [];

        $ctrl.searchUser = function (keyword) {
            keyword.replace('\\uFF20', ' ');
            UsersService.getResearchedUsers(keyword).then(function (response) {
                $ctrl.researchedUsers = response.data;
                console.log($ctrl.researchedUsers);
            });
        };

        $ctrl.addUserToHouse = function (user) {
            UsersService.addUserToHouse(user.id).then(function () {
                $ctrl.newUser = null;
                $ctrl.house.users.push(user);
            });
        }
    }
})(angular);