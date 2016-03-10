'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
/*$(function () {
    $.ajax({
        type: "POST",
url:"http://api.scb.se/OV0104/v1/doris/sv/ssd/START/SF/SF0101/ForaldraPenning",
        data: '{"query":[{"code":"Region","selection":{"filter":"vs:RegionRiket99","values":["00"]}},{"code":"Kon","selection":{"filter":"item","values":["1","2"]}},{"code":"ContentsCode","selection":{"filter":"item","values":["SF0101AG"]}}],"response":{"format":"px"}}',
        contentType: "application/json"
    })
    .done(function(res) {       
    console.log('res', res)
    });
});*/
    
}]);