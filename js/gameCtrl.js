angular.module("app").controller("gameCtrl", function($timeout, $scope, myService, picService, $state){
$scope.hidden = false;
$scope.count = 0;
var counter = 0;
$scope.score = 0;
$scope.answerHidden = true;


$scope.getData = function(){
  myService.getData(myService.catNum).then(function(responseData){
    $scope.items = responseData;
    $scope.answerHidden = false;
    $scope.userAnswer = '';
    $scope.startButtonHidden = true;

  })


$scope.startNewGame = function(){
    $state.reload();
    $scope.n = true;
    picService.remove($scope.n);
  }

$scope.compareAnswer = function() {
    if($scope.userAnswer.toLowerCase() === $scope.items[0].answer.toLowerCase()){
      $scope.hideAndShow = (function(){
        $scope.hidden = true;
      })();
      $scope.correct = "CORRECT";
      $timeout(function () {
        $scope.correct = '';
        $scope.hidden = false;
        $scope.getData(myService.catNum)}, 2000);
        $scope.score += $scope.items[0].value;
      }
    else {
      $scope.hidden = true;
      $scope.correct = "INCORRECT";
      $scope.answerHidden = false;
      $timeout(function () {
        $scope.getData(myService.catNum);
        $scope.correct = '';
        $scope.hidden = false;
        $scope.answerHidden = true}, 2500);
      $timeout(function() {
        counter++;
      if(counter === 3) {
        $state.go('outoflives');
        $scope.pushScoreToPostScore = (function(){
          myService.theScore($scope.score);
        })();
        $scope.getData(myService.catNum);
      }
    }, 2500);
      $scope.remove = (function(){
        picService.remove();
      })();
      $scope.userAnswer = '';
    }
  }


};


})
