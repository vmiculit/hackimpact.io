
// Controllers
angular.module('HackImpact')
	.controller ('homeCtrl', ['$scope', homeCtrl])
	.controller ('organizationsCtrl', ['$scope', organizationsCtrl])
	.controller ('loginCtrl', ['$scope', '$http', loginCtrl])
	.controller ('challengesCtrl', ['$scope', challengesCtrl])
	.controller ('hackRegisterCtrl', ['$scope', '$http', hackRegisterCtrl])
	.controller ('organizationRegisterCtrl', ['$scope', '$http', organizationRegisterCtrl])
	.controller ('submitChallengeCtrl', ['$scope', submitChallengeCtrl])
	.controller ('orgDashboardCtrl', ['$scope', orgDashboardCtrl])
	.controller ('hackDashboardCtrl', ['$scope', hackDashboardCtrl])
	.controller ('workRoomCtrl', ['$scope', workRoomCtrl])

// Controller Functions

function homeCtrl ($scope){
	console.log('homeCtrl Live!');
}

function organizationsCtrl ($scope){
	console.log('organizationsCtrl Live!');
}

function loginCtrl ($scope, $http){

	$scope.loginErrorMessage = ''

	$scope.login = function(){
		$http.post('/api/auth/login', $scope.loginForm).then(function(response){
			if(response.data.user) {
				console.log(response.data.user);
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

function hackRegisterCtrl ($scope, $http){

	$scope.hackReg = function(){
		$http.post('/api/register/hackReg', $scope.hackRegForm).then(function(response){
			if (response.data.success) {
			console.log(response.data);
				// window.location.href="/dashboard"
			}
		})

	}
}

function organizationRegisterCtrl ($scope, $http){

	$scope.orgReg = function(){
		$http.post('/api/register/orgReg', $scope.orgRegForm).then(function(response){
			if (response.data.success) {
			console.log(response.data);
				// window.location.href="/dashboard"
			}
		})

	}
}

function submitChallengeCtrl ($scope){
	console.log('submitChallengeCtrl Live!');
}

function orgDashboardCtrl ($scope){
	console.log('orgDashboardCtrl Live!');
}

function hackDashboardCtrl ($scope){
	console.log('hackDashboardCtrl Live!');
}

function workRoomCtrl ($scope){
	console.log('workRoomCtrl Live!');
}
