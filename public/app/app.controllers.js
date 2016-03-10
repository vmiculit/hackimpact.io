
// Controllers
angular.module('HackImpact')
	.controller ('homeCtrl', ['$scope', homeCtrl])
	.controller ('organizationsCtrl', ['$scope', organizationsCtrl])
	.controller ('loginCtrl', ['$scope', loginCtrl])
	.controller ('challengesCtrl', ['$scope', challengesCtrl])
	.controller ('hackRegisterCtrl', ['$scope', hackRegisterCtrl])
	.controller ('organizationRegisterCtrl', ['$scope', organizationRegisterCtrl])
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
function loginCtrl ($scope){
	console.log('loginCtrl Live!');
}
function challengesCtrl ($scope){
	console.log('challengesCtrl Live!');
}
function hackRegisterCtrl ($scope){
	console.log('hackRegisterCtrl Live!');
}
function organizationRegisterCtrl ($scope){
	console.log('organizationRegisterCtrl Live!');
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
