// Factories
angular.module('HackImpact')
	.factory('userFactory', userFactory)
	.factory('challengeFactory', challengeFactory)

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

function challengeFactory ($http){

	function createChallenge (regForm){
		return $http.post('/api/createChallenge', regForm)
	}

	function retrieveUserChallenges (regForm){
		return $http.get('/api/retrieveUserChallenges')
	}

	function retrieveActiveChallenges (regForm){
		return $http.get('/api/retrieveActiveChallenges')
	}

	return {

		createChallenge				: createChallenge,
		retrieveUserChallenges		: retrieveUserChallenges,
		retrieveActiveChallenges	: retrieveActiveChallenges,

	}
}