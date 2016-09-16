'use strict';

angular.
  module('myApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/store', {
          template: '<store></store>'
        }).
        when('/pet/', {
          template: '<pet></pet>'
        }).
        otherwise('/store');
    }
  ]);