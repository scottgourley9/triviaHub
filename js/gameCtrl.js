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
  $('.gameSection').css('background-image', 'url("http://gamerlimit.com/wp-content/uploads/2016/04/original.jpg")');
}
else if(myService.catNum === 25){
  $('.gameSection').css('background-image', 'url("https://townhallseattle.org/wp-content/uploads/2015/04/World-Science-Festival.jpg")');
}
else if(myService.catNum === 114){
  $('.gameSection').css('background-image', 'url("http://theteachersdigest.com/wp-content/uploads/2014/07/History.png")');
}
else if(myService.catNum === 309){
  $('.gameSection').css('background-image', 'url("http://willmsworks.net/en/wp-content/uploads/2013/09/In-the-Movies_Beitrag.jpg")');
}
else if(myService.catNum === 21){
  $('.gameSection').css('background-image', 'url("https://lh6.googleusercontent.com/-8m4dnBWVFDI/VMrcSG0ffqI/AAAAAAAAAt4/_MC2QgGKYyI/s1600/jungle-animals-bliss-mural.jpg")');
}
else if(myService.catNum === 442){
  $('.gameSection').css('background-image', 'url("https://pixabay.com/static/uploads/photo/2016/01/19/17/45/people-1149873_960_720.jpg")');
}
else if(myService.catNum === 67){
  $('.gameSection').css('background-image', 'url("https://secure.static.tumblr.com/a2236ec2d2a11df3a3299552cc040b93/qnnkp60/GELmszjcj/tumblr_static_oldfashioned_tv_copy.gif")');
}
else if(myService.catNum === 49){
  $('.gameSection').css('background-image', 'url("http://photo.elsoar.com/wp-content/images/Different-fruits-and-vegetables-on-wooden-table.jpg")');
}
else if(myService.catNum === 267){
  $('.gameSection').css('background-image', 'url("http://ekladata.com/r0N2aUnADg7-mwIe1pOR9-eDvYA.jpg")');
}
else if(myService.catNum === 574){
  $('.gameSection').css('background-image', 'url("https://static-secure.guim.co.uk/sys-images/Observer/Pix/pictures/2013/12/23/1387823611665/Library-with-a-book-ladde-014.jpg")');
}
else if(myService.catNum === 99){
  $('.gameSection').css('background-image', 'url("http://31.media.tumblr.com/54ff4524d9fb60c94f522aa74ab25844/tumblr_mwbrjlRMog1qao10ko1_500.jpg")');
}
else if(myService.catNum === 0){
  $('.gameSection').css('background-image', 'url("http://www.dogoilpress.com/data/wallpapers/20/FDS_512011.jpg")');
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
