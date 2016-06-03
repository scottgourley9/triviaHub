angular.module('app').directive('correct', function(){
  return {
    templateUrl: 'views/correct.html',
    restrict: 'EA',
    scope: {
      answer: '='
    }
  }
});
