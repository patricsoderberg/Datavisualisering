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
            [166661, 186179, 210449, 228603, 242571, 251628, 266527, 277436, 288716, 292846, 311740, 319429, 333246, 340246, 344658],
            [275221, 280870, 295294, 306267, 318480, 325773, 339150, 353618, 367274, 377673, 392043, 403230, 410314, 416476, 424591]
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
