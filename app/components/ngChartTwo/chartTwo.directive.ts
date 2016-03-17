/// <reference path="../../../typings/tsd.d.ts" />

/**
 * ChartController
 */
class ChartTwoController {
  data2:any = [];
  chartNr:any;
  
  
  constructor($scope, $timeout) {
    $scope.labels2 = ['Män', 'Kvinor'];
    $scope.series2 = ['Män', 'Kvinor'];
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
    
   $scope.disableButton = function(form) {
     if (form === 1) {
        $scope.isDisabled = true;
        console.log($scope.isDisabled);
        
     }
     else if (form === 2) {
        $scope.isDisabled2 = true;
       
     }
    } 
    

   console.log($scope.data2);
   
     $scope.addUserValue = function (userValue, inputLabel) {        
       if (userValue != null) {     
            $scope.data2[0].push(userValue);
            $scope.series2.push(inputLabel);
            $scope.labels2.push(inputLabel);
        console.log($scope.data2);
       }
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
