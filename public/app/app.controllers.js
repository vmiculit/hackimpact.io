
// Controllers
angular.module('HackImpact')
	.controller ('homeCtrl', [
		'$scope',
		homeCtrl
	])
	.controller ('organizationsCtrl', [
		'$scope',
		organizationsCtrl
	])
	.controller ('loginCtrl', [
		'$scope',
		'userFactory',
		loginCtrl
	])
	.controller ('challengesCtrl', [
		'$scope',
		challengesCtrl
	])
	.controller ('hackRegisterCtrl', [
		'$scope',
		'userFactory',
		hackRegisterCtrl
	])
	.controller ('organizationRegisterCtrl', [
		'$scope',
		organizationRegisterCtrl
	])
	.controller ('submitChallengeCtrl', [
		'$scope',
		submitChallengeCtrl
	])
	.controller ('orgDashboardCtrl', [
		'$scope',
		orgDashboardCtrl
	])
	.controller ('hackDashboardCtrl', [
		'$scope',
		'userFactory',
		hackDashboardCtrl
	])
	.controller ('workRoomCtrl', [
		'$scope',
		workRoomCtrl
	])


// Controller Functions
function homeCtrl ($scope){
	console.log('homeCtrl Live!');
}

function organizationsCtrl ($scope){
	console.log('organizationsCtrl Live!');
}

function loginCtrl ($scope, userFactory){

	$scope.loginErrorMessage = ''

	$scope.login = function(){
		userFactory.userLogin($scope.loginForm)
			.then(function(response){
			if(response.data.userId) {
				console.log(response.data.userId);
				userFactory.userId = response.data.userId
				$scope.loginErrorMessage = ''
				// window.location.href="/"
			} else {
				$scope.loginErrorMessage = response.data.error
				console.log(response.data.error);
			}
		})

	}

}

function challengesCtrl ($scope){
	console.log('challengesCtrl Live!');
}

function hackRegisterCtrl ($scope, userFactory){

	$scope.hackReg = function(){
	userFactory.userSignUp($scope.hackRegForm)
		.then(function(response){
			if (response.data.userId)
				userFactory.userId = response.data.userId
				// window.location.href="/dashboard"
		})
	}
}

function organizationRegisterCtrl ($scope){

	// $scope.orgReg = function(){
	// 	$http.post('/api/register/orgReg', $scope.orgRegForm).then(function(response){
	// 		if (response.data.success) {
	// 		console.log(response.data);
	// 			// window.location.href="/dashboard"
	// 		}
	// 	})

	// }
}

function submitChallengeCtrl ($scope){
	console.log('submitChallengeCtrl Live!');
}

function orgDashboardCtrl ($scope){
	console.log('orgDashboardCtrl Live!');
}

function hackDashboardCtrl ($scope, userFactory){
	$scope.userId = userFactory.userId
	console.log('hackDashboardCtrl Live!');
}

function workRoomCtrl ($scope){
	console.log('workRoomCtrl Live!');
}
