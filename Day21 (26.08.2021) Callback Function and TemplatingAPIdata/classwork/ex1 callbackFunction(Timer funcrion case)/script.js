// example of Asynchronus behavior Handaling Using CALLBACK function

console.log("--start--")
var z;
function product(x,y,callback){
    setTimeout(function(){
        z=x*y
        console.log("--process--")
        callback(z)
    },5000)
   
}
product(5,6,function(r){
    console.log("result",r)
})
console.log("--end--")








/*---------------------------------------------------------*/

// example of Asynchronus behavior (Timer function)

// console.log("--start--")

// function product(x,y){
//     var z;

//     setTimeout(function(){
//         z=x*y
//         console.log("--process--")
//     }, 5000)
    
//     return z
// }
    
//     var r = product(5,6)
//     console.log("result",r)
//     console.log("--end--")









/*---------------------------------------------------------*/

// example of Synchronus behavior

// console.log("--start--")

// function product(x,y){
//          var z;
//         z=x*y
//         console.log("--process--")
//         return z
//     }
    
//     var r = product(5,6)
//     console.log("result",r)
//     console.log("--end--")
