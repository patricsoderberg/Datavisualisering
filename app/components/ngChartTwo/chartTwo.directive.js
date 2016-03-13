/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
/**
 * ChartController
 */
var ChartTwoController = (function () {
    function ChartTwoController($scope) {
        $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.options = [
            'caleLineWidth: 10',
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
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
