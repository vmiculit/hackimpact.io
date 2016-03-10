// Config
angular.module('HackImpact')
	.config([
		'$routeProvider',
		routeConfigs,
	]);

// Routes
function routeConfigs($routeProvider, $locationProvider){

	// Define Routes
	$routeProvider
		.when('/', {
			templateUrl	: '/components/pages/home.html',
			controller	: 'homeCtrl'
		})
		.when('/organizations', {
			templateUrl	: '/components/pages/organizations.html',
			controller	: 'organizationsCtrl'
		})
		.when('/login', {
			templateUrl	: '/components/pages/login.html',
			controller	: 'loginCtrl'
		})
		.when('/challenges', {
			templateUrl	: '/components/pages/challenges.html',
			controller	: 'challengesCtrl'
		})
		.when('/hackRegister', {
			templateUrl	: '/components/pages/hackRegister.html',
			controller	: 'hackRegisterCtrl'
		})
		.when('/organizationRegister', {
			templateUrl	: '/components/pages/organizationRegister.html',
			controller	: 'organizationRegisterCtrl'
		})
		.when('/submitChallenge', {
			templateUrl	: '/components/pages/submitChallenge.html',
			controller	: 'submitChallengeCtrl'
		})
		.when('/orgDashboard', {
			templateUrl	: '/components/pages/orgDashboard.html',
			controller	: 'orgDashboardCtrl'
		})
		.when('/hackDashboard', {
			templateUrl	: '/components/pages/hackDashboard.html',
			controller	: 'hackDashboardCtrl'
		})
		.when('/workRoom', {
			templateUrl	: '/components/pages/workRoom.html',
			controller	: 'workRoomCtrl'
		})

}