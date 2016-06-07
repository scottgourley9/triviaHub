angular.module('app').controller('postScore', function($scope, myService, $state){
  $scope.postableScore = myService.scoreFromGame;

$scope.getData = function(){
  var newUser = {
    name: $scope.userInput,
    score:  $scope.postableScore
  }
  myService.userObjects(newUser);
  myService.sortIt();
  $state.go('highscores');
}

   
})
