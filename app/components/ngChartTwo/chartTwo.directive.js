/// <reference path="../../../typings/tsd.d.ts" />
/**
 * ChartController
 */
var ChartTwoController = (function () {
    function ChartTwoController($scope, $timeout) {
        this.data2 = [];
        $scope.val = "1";
        $scope.labels2 = ["2014"];
        $scope.series2 = ['MÄN', 'KVINNOR'];
        $scope.data2 = [
            [18],
            [65]
        ];
        $scope.options = [
            'caleLineWidth: 10',
        ];
        $scope.testdata = [{
                'room': 'room0',
                'users': '10'
            }];
        console.log($scope.testdata);
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        console.log($scope.data2);
        $scope.addUserValue = function (userValue) {
            console.log("jag kör");
            $scope.data2.push([userValue]);
            $scope.series2.push("Din lön");
            console.log($scope.data2);
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
