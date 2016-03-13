'use strict';

// Declare app level module which depends on views, and components
angular.module( 'directives', [ 'services' ] );
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'ngChart',
  'ngChartOne',
  'ngChartTwo',
  
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
