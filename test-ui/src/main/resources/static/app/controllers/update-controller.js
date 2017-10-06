'use strict';

angular.module('test')
.controller('UpdateController', ['UserService', '$scope', '$location','$localStorage',  function( UserService, $scope,$location,$localStorage) {

	var self = this;
	self.user = $localStorage.user;
	self.submit = submit;
	self.updateUser = updateUser;
	self.reset = reset;

	self.successMessage = '';
	self.errorMessage = '';
	self.done = false;

	self.onlyChars = /[a-zA-Z]$/;
	self.onlyTelefone = /(\([0-9]{1,2})\)([0-9]{4,5})-([0-9]{4})$/;
	self.onlyEmail=/[a-z0-9]+[_a-z0-9\.-]*[a-z0-9]+@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	self.onlySexo=/(\bMasc$)|(\bFem$)/;

	function submit() {
		console.log('Submitting');
		if (self.user.id === undefined || self.user.id === null) {
			console.log('Salvando novo usuário', self.user);
			createUser(self.user);
		} else {
			updateUser(self.user, self.user.id);
			console.log('Atualizando usuário com id ', self.user.id);
		}
	}

	function updateUser(user, id){
		console.log('Atualizar usuário');
		UserService.updateUser(user, id)
		.then(
				function (response){
					console.log('Usuário atualizado com sucesso');
					self.successMessage='Usuário atualizado com sucesso';
					self.errorMessage='';
					self.done = true;
					self.user={};
					$scope.myForm.$setPristine();
				},
				function(errResponse){
					console.error('Erro ao atualizar usuário');
					self.errorMessage='Erro ao atualizar usuário '+errResponse.data;
					self.successMessage='';
				}
		);
	}

	function reset(){
		self.successMessage='';
		self.errorMessage='';
		self.user={};
		$scope.myForm.$setPristine();
	}
}

]);