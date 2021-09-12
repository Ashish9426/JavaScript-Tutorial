// IIFI
var counter = (function(){

    var count = 0;
    return {
        "like" : function(){return ++count;},
        "dislike" : function(){return --count;}
    }
})()
