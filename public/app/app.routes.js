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
		.when('/nonprofits', {
			templateUrl	: '/components/pages/nonprofits.html',
			controller	: 'nonprofitsCtrl'
		})
		.when('/login', {
			templateUrl	: '/components/pages/login.html',
			controller	: 'loginCtrl'
		})
		.when('/challenges', {
			templateUrl	: '/components/pages/challenges.html',
			controller	: 'challengesCtrl'
		})
		.when('/signup', {
			templateUrl	: '/components/pages/signup.html',
			controller	: 'signupCtrl'
		})
		.when('/register', {
			templateUrl	: '/components/pages/register.html',
			controller	: 'registerCtrl'
		})
		.when('/submitChallenge', {
			templateUrl	: '/components/pages/submitChallenge.html',
			controller	: 'submitChallengeCtrl'
		})
		.when('/nonprofitDashboard', {
			templateUrl	: '/components/pages/nonprofitDashboard.html',
			controller	: 'nonprofitDashboardCtrl'
		})
		.when('/coderDashboard', {
			templateUrl	: '/components/pages/coderDashboard.html',
			controller	: 'coderDashboardCtrl'
		})
		.when('/workRoom', {
			templateUrl	: '/components/pages/workRoom.html',
			controller	: 'workRoomCtrl'
		})

}