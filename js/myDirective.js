angular.module('app').directive('myDirective', function(){
  return {
    templateUrl: 'views/myDirective.html',
    restrict: 'EA',
    scope: {

    },
    controller: function($scope, picService){
      $scope.picArr = picService.getPicData();

    },
    link: function(scope, element, attrs){
    
    }
  }
});
