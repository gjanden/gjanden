var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	.when('/about', {
		templateUrl: "templates/about.html",
		// controller: 'AboutController'
	})
	.when('/portfolio', {
		templateUrl: 'templates/portfolio.html',
		// controller: 'PortfolioController'
	})
	.when('/resume', {
		templateUrl: 'templates/resume.html',
		// controller: 'ResumeController'
	})
	.when('/blog' , {
		templateUrl: 'templates/blog.html',
		//controller: 'BlogController'
	})	
	.when('/contact', {
		templateUrl: 'templates/contact.html',
		// controller: 'ContactController'
	})
	.otherwise({ redirectTo: '/' });
});

app.controller('MainController', function(){

});

app.controller('AboutController', function(){

});

app.controller('PortfolioController', function(){

});

app.controller('ResumeController', function(){

});

app.controller('ContactController', function(){

});

console.log('Main.js was successfully loaded')