/// <reference path="../../../typings/tsd.d.ts" />
/**
 * ChartController
 */
var ChartTwoController = (function () {
    function ChartTwoController($scope, $timeout) {
        this.data2 = [];
        $scope.labels2 = ['Män', 'Kvinnor'];
        $scope.series2 = ['Män', 'Kvinnor'];
        $scope.data2 = [
            ["18", "65"],
        ];
        $scope.options = [
            'caleLineWidth: 10',
        ];
        $scope.isDisabled = false;
        // $scope.onClick = function (points, evt) {
        //   console.log(points, evt);
        // }; 
        $scope.disableButton = function (form) {
            if (form === 1) {
                $scope.isDisabled = true;
                console.log($scope.isDisabled);
            }
            else if (form === 2) {
                $scope.isDisabled2 = true;
            }
        };
        console.log($scope.data2);
        $scope.addUserValue = function (userValue, inputLabel) {
            if (userValue != null) {
                $scope.data2[0].push(userValue);
                $scope.series2.push(inputLabel);
                $scope.labels2.push(inputLabel);
                console.log($scope.data2);
            }
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
