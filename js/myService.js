angular.module("app").service("myService", function($http, $q){
this.userArr = [{name: "Billy Beemin", score: 5600},{name: "Sarah Jackson", score: 3400},{name: "Willie Mays", score: 2700},{name: "Billy Beemin", score: 2000},{name: "Mel Gibble", score: 1700},{name: "Steph Murphy", score: 800}];

this.getData = function(category){
  var deferred = $q.defer();
  $http({
    method: "GET",
    url: "http://jservice.io/api/clues?category=" + category
  }).then(function(repsonse){
    var infoFromAPI = repsonse.data;
    deferred.resolve(infoFromAPI);
  })
  return deferred.promise;
}
 this.theScore = function(score){
   this.scoreFromGame = score;
 }

 this.userObjects = function(userInfo){
   this.userArr.push(userInfo);
 }
 this.pushDataToGameCtrl = function(num){
   this.catNum = num;
 }
})
