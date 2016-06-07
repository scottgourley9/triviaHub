angular.module("app").service("myService", function($http, $q, $interval){


 var startingUserArr = [{name: "Billy Beemin", score: 3800},{name: "Sarah Jackson", score: 3400},{name: "Willie Mays", score: 2000},{name: "Billy Beemin", score: 1700},{name: "Mel Gibble", score: 1200},{name: "Steph Murphy", score: 800}];
this.custom = 0;
this.getData = function(category){

  var deferred = $q.defer();
  $http({
    method: "GET",
    url: "http://jservice.io/api/clues?category=" + category
  }).then(function(repsonse){
    var infoFromAPI = repsonse.data;
    var randNum = Math.floor((Math.random()*infoFromAPI.length) + 1);
    var testing = infoFromAPI[randNum];
    deferred.resolve(testing);
  })
  return deferred.promise;

}
 this.theScore = function(score){
   this.scoreFromGame = score;
 }

 this.userObjects = function(userInfo){
   startingUserArr.push(userInfo);
 }
 this.sortIt = function(){
   var bigger = 0;
   for(var i = 0; i < startingUserArr.length; i++){
     for(var j = i; j < startingUserArr.length; j++){
       if(startingUserArr[i].score >= startingUserArr[j].score){
         bigger = startingUserArr[i];
         startingUserArr[i] = startingUserArr[j];
         startingUserArr[j] = bigger;

       }
     }
   }
   this.userArr = startingUserArr.reverse();
 }
 this.pushDataToGameCtrl = function(num){
   this.catNum = num;
 }



this.customQuestionArr = [];
this.createQuizArr = function(questionObj){
  this.customQuestionArr.push(questionObj);

  this.customQuestionArrToPost = this.customQuestionArr;


}

this.startBrandNewQuiz = function(){
  this.customQuestionArr.splice(0, 1);

}


})
