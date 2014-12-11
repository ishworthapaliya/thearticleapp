'use strict';

var restApp = angular.module('restApp',['restApp.articleData', 'restApp.articleController', 'ngRoute']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/articles', {templateUrl: 'templates/articles.html', controller: 'articleListCtrl'});
        
       $routeProvider.when('/article-detail/:id', {templateUrl: 'templates/article-detail.html', controller: 'articleDetailCtrl'});
        $routeProvider.when('/new-article', {templateUrl: 'templates/new-article.html', controller: 'articleCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/articles'});
		
	}]);