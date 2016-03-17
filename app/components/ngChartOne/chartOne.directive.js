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
            [243000, 254400, 261100, 262800, 268800, 277000, 287300, 300400, 312400, 313000, 318000, 330000, 338600, 343900, 352200],
            [172700, 181900, 189100, 192900, 198100, 203500, 211200, 219700, 229800, 235600, 240000, 248600, 257100, 264400, 272400]
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
