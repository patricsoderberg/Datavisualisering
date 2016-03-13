/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

/**
 * ChartController
 */
class ChartController {
  dataSet:any;
  chartNr:any;
  
  constructor($scope) {
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
