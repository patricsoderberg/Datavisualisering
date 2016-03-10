/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
/**
 * ChartController
 */
var ChartController = (function () {
    function ChartController($scope) {
    }
    return ChartController;
})();
/**
 * ChartDirective
 */
var ChartDirective = (function () {
    function ChartDirective() {
        this.restrict = 'AE';
        this.templateUrl = 'components/ngChart/ngChart.template.html';
        this.controller = ChartController;
        this.controllerAs = 'chartCtrl';
    }
    ChartDirective.IID = 'ngChart';
    return ChartDirective;
})();
angular.module('ngChart')
    .directive(ChartDirective.IID, function () { return new ChartDirective(); });
