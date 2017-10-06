'use strict';

angular.module('test')
.controller('ListController', ['UserService', '$scope', '$location','$localStorage',  function( UserService, $scope,$location, $localStorage) {

	var self = this;
	self.getAllUsers = getAllUsers;
	self.removeUser = removeUser;
	self.editUser = editUser;

	self.successMessage = '';
	self.errorMessage = '';
	self.done = false;

	function removeUser(id){
		console.log('Removendo usuário com id '+id);
		UserService.removeUser(id)
		.then(
				function(){
					console.log('Usuário '+id + ' removido com sucesso');
				},
				function(errResponse){
					console.error('Erro ao remover usuário '+id +', Erro :'+errResponse.data);
				}
		);
	}
	
	function editUser(id) {
		$location.path('/user/'+id);
		UserService.getUser(id).then(
				function (user) {
					$localStorage.user = user.data;
				},
				function (errResponse) {
					console.error('Erro ao editar usuário ' + id + ', Erro :' + errResponse.data);
				}
		);
	}

	function getAllUsers(){
		return UserService.getAllUsers();
	}
}

]);