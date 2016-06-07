angular.module('app').controller('noMoreQuestionsCtrl', function($state, $scope, myService){
  $scope.yourScore = myService.scoreFromGame;

  $scope.newGame = function(){
    $state.go('chooseCategory');
  }
  $scope.goHome = function(){
    $state.go('home');
  }
  $scope.goToCreateQuiz = function(){
    $state.go('createQuiz');
    
  }
})
