
'use strict';

angular.module('test').config(['$stateProvider', function ($stateProvider) {

	$stateProvider.state('app', {
		url: '/home',
		templateUrl: '/app/app-template.html',
		controller: 'AppController'
	});
	
	$stateProvider
    .state('user', {
        url: '/user/',
        templateUrl: '/app/partials/lista.html',
        controller:'ListController',
        controllerAs:'ctrl',
        resolve: {
            users: function ($q, UserService) {
                console.log('Carregando todos usuarios');
                var deferred = $q.defer();
                UserService.loadAllUsers().then(deferred.resolve, deferred.resolve);
                return deferred.promise;
            }
        }
    });
	
	$stateProvider
    .state('add', {
        url: '/user/add',	
        templateUrl: '/app/partials/usuario.html',
        controller:'CadController',
        controllerAs:'ctrl'
    });
	
	$stateProvider
    .state('edit', {
        url: '/user/{id}',
        templateUrl: '/app/partials/usuario.html',
        controller:'UpdateController', 
        controllerAs:'ctrl'
    });
	
}]);