
var app = angular.module('myApp',['ngRoute']);


app.config(function($routeProvider){
	 $routeProvider.
            
            when('/', {
               templateUrl: 'login.html',
            }).
            when('/page1', {
               templateUrl: 'page1.html',
            }).
            when('/page2', {
               templateUrl: 'page2.html',
            }).
            when('/page3', {
               templateUrl: 'page3.html',
            }).
            when('/page4', {
               templateUrl: 'page4.html',
            }).
            when('/dashboard', {

            	resolve:{
            		"check" : function($rootScope,$location){
            			if(!$rootScope.loggedIn){
            				$location.path('/');
            			}

            		}

            	},
               templateUrl: 'dashboard.html',
            }).
            
            otherwise({
               redirectTo: '/'
            });
});


app.controller('loginCtrl',function($scope,$location,$rootScope){

	$scope.submit = function(){

		console.log("Submit Action");
		if($scope.username == 'admin' && $scope.password == 'admin'){
			
			$rootScope.loggedIn = true;

			$location.path('/dashboard');

	}
	};

	

});

app.controller('dashboardCtrl',function($scope,$location){

	$scope.page1 = function(){
		$location.path('/page1');

	}
	$scope.page2 = function(){
		$location.path('/page2');

	}
	$scope.page3= function(){
		$location.path('/page3');

	}
	$scope.page4 = function(){
		$location.path('/page4');

	}

	

});