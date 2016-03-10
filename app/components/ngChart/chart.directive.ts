/// <reference path="../../../typings/tsd.d.ts" />
'use strict';

/**
 * ChartController
 */
class ChartController {
  constructor($scope) {
    
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

angular.module( 'ngChart' )
  .directive( ChartDirective.IID, () => new ChartDirective() ); 
