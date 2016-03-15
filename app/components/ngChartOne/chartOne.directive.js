/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
/**
 * ChartController
 */
var ChartOneController = (function () {
    function ChartOneController($scope) {
        $scope.labels1 = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];
        $scope.series1 = ['MÄN', 'KVINNOR'];
        $scope.data1 = [
            [243.0, 254.4, 261.1, 262.8, 268.8, 277.0, 287.3, 300.4, 312.4, 313.0, 318.0, 330.0, 338.6, 343.9, 352.2],
            [172.7, 181.9, 189.1, 192.9, 198.1, 203.5, 211.2, 219.7, 229.8, 235.6, 240.0, 248.6, 257.1, 264.4, 272.4]
        ];
        $scope.options1 = [
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
