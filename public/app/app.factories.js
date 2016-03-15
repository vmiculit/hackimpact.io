// Factories
angular.module('HackImpact')
	.factory('userFactory', userFactory)

// Factory Functions

function userFactory ($http){

	function userSignUp (regForm){
		return $http.post('/api/signup', regForm)
	}

	function orgRegistration (regForm){
		return $http.post('/api/register', regForm)
	}

	function userLogin (loginForm){
		return $http.post('/api/auth/login', loginForm)

	}

	function checkUser () {
		return $http.get('/api/auth/check')
	}

	function userLogout () {
		return $http.get('/api/auth/logout')
	}

	return {

		userSignUp			: userSignUp,
		orgRegistration		: orgRegistration,
		userLogin			: userLogin,
		checkUser			: checkUser,
		userLogout			: userLogout,

	}
}