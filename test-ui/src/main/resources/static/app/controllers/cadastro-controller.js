'use strict';

angular.module('test')
.controller('CadController', ['UserService', '$scope', '$location',  function( UserService, $scope,$location) {

	var self = this;
	self.user = {};
	self.submit = submit;
	self.createUser = createUser;
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

	function createUser(user) {
		console.log('Criando novo usuário');
		UserService.createUser(user)
		.then(
				function (response) {
					console.log('Usuário criado com sucesso');
					self.successMessage = 'Usuário criado com sucesso';
					self.errorMessage='';
					self.done = true;
					self.user={};
					$scope.myForm.$setPristine();
				},
				function (errResponse) {
					console.error('Erro ao criar usuário');
					self.errorMessage = 'Erro ao criar usuário: ' + errResponse.data.errorMessage;
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