/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

/**
 * ChartController
 */
class ChartController {
  dataSet:any;
  chartNr:any;
  chart1:any;
  
  constructor($scope, $http) {
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

     var data = $http({
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
                ],
              },
            },
           ],
          },
           
        
    }).then(function successCallback(response) {
        console.log(response);
        angular.forEach(response,function (dataSet) {
          if (data.key === "1") 
          {
          this.chart1.men = "data.value";
          }
          console.log(dataSet);  
          console.log("$scope.chart1");  
          
        })
      }, function errorCallback(response) {
        alert('somehing went wrong');
      });
      console.log(data)

   }
    
 }
  


/**
 * ChartDirective 
 */
class ChartDirective implements ng.IDirective {
  static IID = 'ngChart';
  public restrict:string = 'AE';
  public templateUrl:string = 'components/ngChart/ngChart.template.html';
         controller:any = ChartController;
  public controllerAs:string = 'chartCtrl';
}

angular.module( 'ngChart', ['chart.js'] )
  .directive( ChartDirective.IID, () => new ChartDirective() ); 
