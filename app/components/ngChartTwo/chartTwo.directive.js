/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
/**
 * ChartController
 */
var ChartTwoController = (function () {
    function ChartTwoController($scope) {
      $scope.labels2 = ['2014'];
        $scope.series2 = ['MAN', 'KVINNA'];

        $scope.data2 = [
    [65],
    [28]
  ];
    function addUserValue ($scope, userValue) {
        console.log("jag kör")
        $scope.data2.push(userValue) 
        
    }
        
    }
    return ChartTwoController;
})();
/**
 * ChartDirective
 */
var ChartTwoDirective = (function () {
    function ChartTwoDirective() {
        this.restrict = 'AE';
        this.templateUrl = 'components/ngChartTwo/ngChartTwo.template.html';
        this.controller = ChartTwoController;
        this.controllerAs = 'chartTwoCtrl';
    }
    ChartTwoDirective.IID = 'ngChartTwo';
    return ChartTwoDirective;
})();
angular.module('ngChartTwo', ['chart.js'])
    .directive(ChartTwoDirective.IID, function () { return new ChartTwoDirective(); });
