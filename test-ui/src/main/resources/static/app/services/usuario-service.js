'use strict';

angular.module('test').factory('UserService',
		['$localStorage', '$http', '$q', 'urls',
	function ($localStorage, $http, $q, urls) {

	var factory = {
			loadAllUsers: loadAllUsers,
			getAllUsers: getAllUsers,
			getUser: getUser,
			createUser: createUser,
			updateUser: updateUser,
			removeUser: removeUser
	};

	return factory;

	function loadAllUsers() {
		console.log('Carergando todos usuários');
		var deferred = $q.defer();
		$http.get(urls.URL_API_ALL)
		.then(
				function (response) {
					console.log('Usuários carregados com sucesso');
					$localStorage.users = response.data;
					deferred.resolve(response);
				},
				function (errResponse) {
					console.error('Erro ao carregar usuários');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}

	function getAllUsers(){
		return $localStorage.users;
	}

	function getUser(id) {
		console.log('Procurando usuário com id :'+id);
		var deferred = $q.defer();
		$http.get(urls.URL_API_ALL + id)
		.then(
				function (response) {
					console.log('Usuário retornado com sucesso');
					$localStorage.user = response.data;
					deferred.resolve(response);
				},
				function (errResponse) {
					console.error('Erro ao carregar usuário');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
	
	function loadUser(){
		return $localStorage.user;
	}

	function createUser(user) {
		console.log('Criando usuário');
		var deferred = $q.defer();
		$http.post(urls.URL_API_ALL, user)
		.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function (errResponse) {
					console.error('Erro ao criar usuário: '+errResponse.data.errorMessage);
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}

	function updateUser(user, id) {
		console.log('Atualizando usuário');
		var deferred = $q.defer();
		$http.put(urls.URL_API_ALL + id, user)
		.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function (errResponse) {
					console.error('Erro ao atualizar usuário');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}

	function removeUser(id) {
		console.log('Removendo usuário');
		var deferred = $q.defer();
		$http.delete(urls.URL_API_ALL + id)
		.then(
				function (response) {
					loadAllUsers();
					deferred.resolve(response.data);
				},
				function (errResponse) {
					console.error('Erro ao remover usuário');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}

}
]);