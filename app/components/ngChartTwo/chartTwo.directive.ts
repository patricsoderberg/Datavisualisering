/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

/**
 * ChartController
 */
class ChartTwoController {
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
class ChartTwoDirective implements ng.IDirective {
  static IID = 'ngChartTwo';
  public restrict:string = 'AE';
  public templateUrl:string = 'components/ngChartTwo/ngChartTwo.template.html';
         controller:any = ChartTwoController;
  public controllerAs:string = 'chartTwoCtrl';
}

angular.module( 'ngChartTwo', ['chart.js'] )
  .directive( ChartTwoDirective.IID, () => new ChartTwoDirective() ); 
