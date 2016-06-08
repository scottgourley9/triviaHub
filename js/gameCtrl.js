angular.module("app").controller("gameCtrl", function($rootScope, $document, $timeout, $interval, $scope, myService, picService, $state){

$scope.hidden = false;
$scope.count = 0;
var counter = 0;
$scope.score = 0;
$scope.answerHidden = true;
$scope.test = false;
var questionCounter = -1;


var timer;
function time(){
  timer = $interval(function(){
    $scope.countDown--;
    if($scope.countDown===0){
      $scope.stopTimer();
      $scope.compareAnswer();
    }

  }, 1000)
}
$scope.stopTimer = function(){
  $interval.cancel(timer);
  timer = undefined;
}

$scope.backgroundImages = (function(){
$scope.stopTimer();
$rootScope.$on('$stateChangeStart', function(){
  if(timer){
  $scope.stopTimer();
}
$scope.n = true;
picService.remove($scope.n);

})
if(myService.catNum === 42){
  $('.gameSection').css('background-image', 'url("images/sports.jpg")');
}
else if(myService.catNum === 25){
  $('.gameSection').css('background-image', 'url("images/science.jpg")');
}
else if(myService.catNum === 114){
  $('.gameSection').css('background-image', 'url("images/history.png")');
}
else if(myService.catNum === 309){
  $('.gameSection').css('background-image', 'url("images/movies.jpg")');
}
else if(myService.catNum === 21){
  $('.gameSection').css('background-image', 'url("images/animals.jpg")');
}
else if(myService.catNum === 442){
  $('.gameSection').css('background-image', 'url("images/people.jpg")');
}
else if(myService.catNum === 67){
  $('.gameSection').css('background-image', 'url("images/tv.gif")');
}
else if(myService.catNum === 49){
  $('.gameSection').css('background-image', 'url("images/food.jpg")');
}
else if(myService.catNum === 267){
  $('.gameSection').css('background-image', 'url("images/nature.jpg")');
}
else if(myService.catNum === 574){
  $('.gameSection').css('background-image', 'url("images/literature.jpg")');
}
else if(myService.catNum === 99){
  $('.gameSection').css('background-image', 'url("images/religion.jpg")');
}
else if(myService.catNum === 0){
  $('.gameSection').css('background-image', 'url("images/custom.jpg")');
}

})();
$scope.getData = function(){

$scope.countDown = 30;
time();




  myService.getData(myService.catNum).then(function(responseData){
    $scope.items = responseData;
    if(myService.custom){
      questionCounter++;
      $scope.items = myService.customQuestionArrToPost[questionCounter];
      if(questionCounter > myService.customQuestionArrToPost.length - 1){
        $scope.pushScoreToPostScore = (function(){
          myService.theScore($scope.score);
        })();
        $state.go('noMoreQuestions');
      }
    }
    $scope.answerHidden = true;
    $scope.userAnswer = '';
    $scope.startButtonHidden = true;
    $('.cat').addClass('animated slideInLeft');
    $('.value').addClass('animated slideInLeft');
    $('.question').addClass('animated slideInLeft');







  })


$scope.startNewGame = function(){
  $scope.stopTimer();
    $state.reload();
    $scope.n = true;
    picService.remove($scope.n);


  }

$scope.compareAnswer = function() {
  $scope.stopTimer();
    if($scope.userAnswer.toLowerCase() === $scope.items.answer.toLowerCase()){
      $scope.hideAndShow = (function(){
        $scope.hidden = true;
      })();
      $scope.correct = "CORRECT";
      $timeout(function () {
        $scope.correct = '';
        $scope.hidden = false;
        $scope.getData(myService.catNum)}, 2000);
        $scope.score += Math.floor($scope.items.value);


      }
    else {
      $('.theLives').addClass('animated bounceInDown')
      $scope.hidden = true;
      $scope.correct = "INCORRECT";
      $scope.answerHidden = false;
      $timeout(function () {
        $scope.getData(myService.catNum);
        $scope.correct = '';
        $scope.hidden = false;
        $scope.answerHidden = true}, 3000);
      $timeout(function() {
        counter++;
      if(counter === 3) {

        $scope.stopTimer();
        $state.go('outoflives');
        $scope.pushScoreToPostScore = (function(){
          myService.theScore($scope.score);
        })();

      }
    }, 3000);
      $scope.remove = (function(){
        picService.remove();
      })();
      $scope.userAnswer = '';
    }
  }


};
})
