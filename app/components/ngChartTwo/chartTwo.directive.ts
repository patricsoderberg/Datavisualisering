/// <reference path="../../../typings/tsd.d.ts" />

/**
 * ChartController
 */
class ChartTwoController {
  data2:any = [];
  chartNr:any;
  
  constructor($scope, $timeout) {
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
                
    }   
    
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
