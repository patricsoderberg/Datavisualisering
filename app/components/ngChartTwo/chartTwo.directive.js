/// <reference path="../../../typings/tsd.d.ts" />
/**
 * ChartController
 */
var ChartTwoController = (function () {
    function ChartTwoController($scope, $timeout) {
        this.data2 = [];
        $scope.labels2 = ['Män', 'Kvinor'];
        $scope.series2 = ['Män', 'Kvinor'];
        $scope.data2 = [
            ["18", "65"],
        ];
        $scope.options = [
            'caleLineWidth: 10',
        ];
        $scope.testdata = [{
                'room': 'room0',
                'users': '10'
            }];
        console.log($scope.testdata);
        // $scope.onClick = function (points, evt) {
        //   console.log(points, evt);
        // }; 
        console.log($scope.data2);
        $scope.addUserValue = function (userValue) {
            $scope.data2[0].push(userValue);
            $scope.series2.push("Din lön");
            $scope.labels2.push("Din lön");
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
