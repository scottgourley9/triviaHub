angular.module('app').service('picService', function(){
  var picArr = [
    'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg',
    'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg',
    'http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg'
  ]
  this.getPicData = function(){

    return picArr;
  }
  this.remove = function(n){
    if(n){
      picArr.splice(0);
      for(var i = 0; i < 3; i++){
        picArr.push('http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg');
      }
    }
    else {
      picArr.splice(0, 1);
      if(picArr.length === 0){
        for(var i = 0; i < 3; i++){
          picArr.push('http://www.clker.com/cliparts/P/Q/t/5/E/r/white-stick-figure.svg');
        }
      }

    }


  }


})
