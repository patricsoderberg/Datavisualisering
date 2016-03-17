/// <reference path="../../../typings/tsd.d.ts" />
'use strict';
/**
 * ChartController
 */
var ChartController = (function () {
    function ChartController($scope, $http) {
        $scope.labels = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"];
        $scope.series = ['MÄN', 'KVINNOR'];
        $scope.data = [
            [4434914, 5042339, 5916340, 6907672, 7901340, 8319861, 8957876, 9434533, 10143062, 10669822, 11489945, 11921088, 12407072, 12741697, 13212016],
            [31226342, 31458834, 32212086, 33238585, 34407709, 34338497, 34526064, 35856118, 37117288, 37169343, 38228681, 38363061, 38370595, 38706268, 38962053]
        ];
        $scope.options = [
            'caleLineWidth: 10',
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
      /*  var data = $http({
            method: 'GET',
            url: 'http://api.scb.se/OV0104/v1/doris/sv/ssd/START/SF/SF0101/ForaldraPenning',
            headers: ' ',
            data: {
                "query": [
                    {
                        "code": "Region",
                        "selection": {
                            "filter": "vs:RegionRiket99",
                            "values": []
                        }
                    },
                    {
                        "code": "Kon",
                        "selection": {
                            "filter": "item",
                            "values": [
                                "1",
                                "2",
                            ]
                        }
                    },
                ]
            }
        }).then(function successCallback(response) {
            console.log(response);
            angular.forEach(response, function (dataSet) {
                if (data.key === "1") {
                    this.chart1.men = "data.value";
                }
                console.log(dataSet);
                console.log("$scope.chart1");
            });
        }, function errorCallback(response) {
            alert('somehing went wrong');
        });
        console.log(data);*/
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
angular.module('ngChart', ['chart.js'])
    .directive(ChartDirective.IID, function () { return new ChartDirective(); });
