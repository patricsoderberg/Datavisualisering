/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
/**
 * ChartController
 */
var ChartOneController = (function () {
    function ChartOneController($scope) {
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
    return ChartOneController;
})();
/**
 * ChartDirective
 */
var ChartOneDirective = (function () {
    function ChartOneDirective() {
        this.restrict = 'AE';
        this.templateUrl = 'components/ngChartOne/ngChartOne.template.html';
        this.controller = ChartOneController;
        this.controllerAs = 'chartOneCtrl';
    }
    ChartOneDirective.IID = 'ngChartOne';
    return ChartOneDirective;
})();
angular.module('ngChartOne', ['chart.js'])
    .directive(ChartOneDirective.IID, function () { return new ChartOneDirective(); });
