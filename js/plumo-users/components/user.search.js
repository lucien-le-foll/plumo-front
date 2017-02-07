(function(angular){
	
	angular.module('plumo-users').component('plumoUserSearch',{
		bindings:{
			users:'='
		},
		templateUrl:'views/plumo-users/searchUser.html',
		controller:'UsersSearchCtrl'
	});
	
})(angular);