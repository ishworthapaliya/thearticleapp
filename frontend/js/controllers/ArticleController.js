'use strict';

var app = angular.module('restApp.articleController', []);

app.controller('articleListCtrl', ['$scope', 'ArticlesFactory', 'ArticleFactory', '$location',
    function ($scope, articlesFactory, articleFactory, $location) {

        // callback for ng-click 'editarticle':
        $scope.editArticle = function (articleId) {
            $location.path('/article-detail/' + articleId);
        };

        // callback for ng-click 'deletearticle':
        $scope.deleteArticle = function (articleId) {
            articleFactory.delete({ id: articleId });
           $location.path('/articles');
           $scope.articles = articlesFactory.query();
        };

        // callback for ng-click 'createarticle':
        $scope.createNewArticle = function () {
            $location.path('/new-article');
        };

        $scope.articles = articlesFactory.query();
    }]);
    

app.controller('articleDetailCtrl', ['$scope', '$routeParams', 'ArticleFactory', '$location',
    function ($scope, $routeParams, ArticleFactory, $location) {

        $scope.updateArticle = function () {
            ArticleFactory.update($scope.article).$promise.then(function (article) {
                    $scope.article = article;
                    $location.path('/articles');
                   // $route.reload();
                }, function (err) {
                    console.error(err);
                });
        };

        $scope.cancel = function () {
            $location.path('/articles');
        };

        $scope.article = ArticleFactory.show({id: $routeParams.id});
    }]);

app.controller('articleCreationCtrl', ['$scope', 'ArticlesFactory', '$location',
    function ($scope, ArticlesFactory, $location) {

        $scope.createNewArticle = function () {
            ArticlesFactory.create($scope.article).$promise.then(function (article) {
                    $scope.article = article;
                    $location.path('/articles');
                    //$route.reload();
                }, function (err) {
                    console.error(err);
                });
        }
    }]);