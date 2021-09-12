// IIFI
var counter = (function(){

    var count = 0;
    count++;
    return function(){
        return ++count;  
    }
})()
