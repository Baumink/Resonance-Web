'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('resonance', [
    'ngRoute',
    'ngMaterial'
]);
app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.when("/news", {templateUrl: "news/news.html"})
        .otherwise({redirectTo: '/news'});
}]);
app.controller('controllerSidenav', function ($scope, $mdSidenav) {
    $scope.openLeftMenu = function () {
        $mdSidenav('left').toggle();
    };
});

app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('teal', {
            'default': '600',
            'hue-1': '700'
        })
        .accentPalette('pink');
});