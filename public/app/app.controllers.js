
// Controllers
angular.module('HackImpact')
	// Stand Alone
	.controller ('shellCtrl', [
		'$scope',
		'$sessionStorage',
		'$window',
		'userFactory',
		shellCtrl
	])
	.controller ('navCtrl', [
		'$scope',
		'userFactory',
		navCtrl
	])

	// Routed
	.controller ('homeCtrl', [
		'$scope',
		homeCtrl
	])
	.controller ('nonprofitsCtrl', [
		'$scope',
		nonprofitsCtrl
	])
	.controller ('loginCtrl', [
		'$scope',
		'$window',
		'userFactory',
		loginCtrl
	])
	.controller ('challengesCtrl', [
		'$scope',
		'challengeFactory',
		challengesCtrl
	])
	.controller ('signupCtrl', [
		'$scope',
		'$window',
		'userFactory',
		'Upload',
		signupCtrl
	])
	.controller ('registerCtrl', [
		'$scope',
		'$window',
		'userFactory',
		registerCtrl
	])
	.controller ('submitChallengeCtrl', [
		'$scope',
		'$window',
		'challengeFactory',
		submitChallengeCtrl
	])
	.controller ('nonprofitDashboardCtrl', [
		'$scope',
		'challengeFactory',
		nonprofitDashboardCtrl
	])
	.controller ('coderDashboardCtrl', [
		'$scope',
		'challengeFactory',
		coderDashboardCtrl
	])
	.controller ('workRoomCtrl', [
		'$scope',
		workRoomCtrl
	])


// Controller Functions
// Stand Alone

function shellCtrl($scope, $sessionStorage, $window, userFactory){
	// Assignments
	$scope.$storage = $sessionStorage
	$scope.checkUser = checkUser
	$scope.userLogout = userLogout

	// Check if user is Logged In
	$scope.checkUser()

	// Functions
	function checkUser (){
		userFactory.checkUser().then(function(response){
			if (!response.data.status) {
				$scope.$storage.$reset()
			}
		})
	}

	function userLogout (){
		userFactory.userLogout().then(function(response){
			if (response.data.status) {
				$scope.$storage.$reset()
				$window.location.href = '#/'
			}
		})
	}

}

function navCtrl ($scope, userFactory){
	// Check if user is logged in
	$scope.checkUser()
}

// Routed
function homeCtrl ($scope){
	// Check if user is logged in
	$scope.checkUser()

}

function nonprofitsCtrl ($scope){
	// Check if user is logged in
	$scope.checkUser()
}

function loginCtrl ($scope, $window, userFactory){
	// Check if user is logged in
	$scope.checkUser()

	$scope.loginErrorMessage = ''

	$scope.login = function(){
		userFactory.userLogin($scope.loginForm)
			.then(function(response){
			if(response.data.userId && response.data.userType == "coder") {
				$scope.$storage.user = response.data
				$scope.loginErrorMessage = ''
				$window.location.href="#/coderDashboard"
			} else if (response.data.userId && response.data.userType == "nonprofit") {
				$scope.$storage.user = response.data
				$scope.loginErrorMessage = ''
				$window.location.href="#/nonprofitDashboard"
			} else {
				$scope.loginErrorMessage = response.data.error
				console.log(response.data.error);
			}
		})
	}
}

function challengesCtrl ($scope, challengeFactory){
	// Check if user is logged in
	$scope.checkUser()

	challengeFactory.retrieveActiveChallenges().then(function(response){
		console.log(response.data)
	})

}

function signupCtrl ($scope, $window, userFactory, Upload){
	// Check if user is logged in
	$scope.checkUser()

	$scope.signupErrorMessage = ''

	$scope.signup = function(){
		$scope.signupForm.type = "coder"
		$scope.signupForm.role = "user"
		userFactory.userSignUp($scope.signupForm)
			.then(function(response){
				if(response.data.userId && response.data.userType == "coder") {
					$scope.$storage.user = response.data
					$scope.signupErrorMessage = ''
					$window.location.href="#/coderDashboard"
				} else if (response.data.userId && response.data.userType == "nonprofit") {
					$scope.$storage.user = response.data
					$scope.signupErrorMessage = ''
					$window.location.href="#/nonprofitDashboard"
				} else {
					$scope.signupErrorMessage = "Email already in use. Try again."
					console.log(response.data.error);
				}
			})
	}
}

function registerCtrl ($scope, $window, userFactory){
	// Check if user is logged in
	$scope.checkUser()

$scope.registerErrorMessage = ''

	$scope.orgReg = function(){
		$scope.orgRegForm.type = "nonprofit"
		$scope.orgRegForm.role = "user"
		userFactory.orgRegistration($scope.orgRegForm)
			.then(function(response){
				if(response.data.userId && response.data.userType == "coder") {
					$scope.$storage.user = response.data
					$scope.registerErrorMessage = ''
					$window.location.href="#/coderDashboard"
				} else if (response.data.userId && response.data.userType == "nonprofit") {
					$scope.$storage.user = response.data
					$scope.registerErrorMessage = ''
					$window.location.href="#/nonprofitDashboard"
				} else {
					$scope.registerErrorMessage = "Email already in use. Try again."
					console.log(response.data.error);
				}
			})
	}
}

function submitChallengeCtrl ($scope, $window, challengeFactory){
	// Check if user is logged in
	$scope.checkUser()

	$scope.submitChallengeErrorMessage = ""

	$scope.submitChallenge = function(){

		// $scope.challengeForm.organizationId = $scope.$storage.organizationId
		// $scope.challengeForm.createdby = $scope.$storage.userId

		challengeFactory.createChallenge($scope.challengeForm)
			.then(function(response){
				if(response.data.success) {
					$window.location.href="#/nonprofitDashboard"
				} else {
					$scope.submitChallengeErrorMessage = "Oops! Something went wrong."
					console.log(response.data.error);
				}
			})
	}
}

function nonprofitDashboardCtrl ($scope, challengeFactory){
	// Check if user is logged in
	$scope.checkUser()

	challengeFactory.retrieveUserChallenges().then(function(response){
		console.log(response.data)
	})

}

function coderDashboardCtrl ($scope, challengeFactory){
	// Check if user is logged in
	$scope.checkUser()

}

function workRoomCtrl ($scope){
	// Check if user is logged in
	$scope.checkUser()

}

