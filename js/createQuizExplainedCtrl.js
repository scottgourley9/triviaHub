angular.module('app').controller('createQuizExplainedCtrl', function($scope, $state){
  $scope.goToChoose = function(){
    $state.go('createQuiz');
  }

})
