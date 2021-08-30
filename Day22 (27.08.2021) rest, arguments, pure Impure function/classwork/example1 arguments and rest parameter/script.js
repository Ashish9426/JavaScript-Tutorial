// var items = [6,7,8]
// items.splice(1,1,10)
// console.log(items)


/*------------------------------------------------*/


// var items = [6,7,8]
// items.splice(1,1,10,12,13,14,8)
// console.log(items)
 

/*------------------------------------------------*/

// function sum(x,y){
//     var z = x+y;
//     return z
// }
// console.log(sum(2, 8))  // 10
// console.log(sum(2, 8, 7, 9)) // 10


// if we pass more than two parameter then this function 
// will add only two parameters. because in java script there is
// no compiler so this will not through error only just add two 
// parameter. because in javaScript all parameter put into array
// so we have to write geneeric function


/*------------------------------------------------*/

// function sum(x,y){
//     var z = x+y;
//     console.log(arguments)
//     return z
// }
// console.log(sum(2, 8, 7, 9)) // 10

/*------------------------------------------------*/


// function sum(x,y){
//     var z = 0;
//     for(var i=0; i<arguments.length; i++){
//         z += arguments[i]
//     }
//     return z
// }

// console.log(sum(2,5,7,9,11,22,33))

// this is generic sum function. here we can pass any parameter
// this will give correct sum.
// in this method all parameter isoptional

// but if want to make two optional parameter then this will not work
// in javaScript there is another approch to write generic function with
// optional parameter.
// rest operator

// rest is also store paraameter in Array

/*------------------------------------------------*/

function sum(x, y, ...rest){
    var z = x+y;
    for(var i=0; i<rest.length; i++){
        z += rest[i]
    }
    return z
}

console.log(sum(2,5,7,9,11,22,33,44))
