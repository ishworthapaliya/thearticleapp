'use strict';


var services = angular.module('restApp.articleData', ['ngResource']);

	services.factory('ArticlesFactory', function($resource){
		return $resource( 'http://localhost\\:3000/api/articles', {},{
			query: {method: 'GET', isArray:true},
			create: {method: 'POST'}
		})

	});
	
	services.factory('ArticleFactory', function ($resource) {
    return $resource('http://localhost\\:3000/api/articles/:id', {}, {
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@_id'} },
        delete: { method: 'DELETE', params: {id: '@_id'} }
    })
});