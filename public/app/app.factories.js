// Factories
angular.module('HackImpact')
	.factory('userFactory', userFactory)

// Factory Functions

function userFactory ($http){

	var userId

	function userSignUp (regForm){
		return $http.post('/api/signup', regForm)
	}

	function userLogin (loginForm){
		return $http.post('/api/auth/login', loginForm)

	}

	return {

		userSignUp		: userSignUp,
		userId 			: userId,
		userLogin		: userLogin,

	}
}