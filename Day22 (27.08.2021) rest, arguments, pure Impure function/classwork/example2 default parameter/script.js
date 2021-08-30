

/*---------function with default argument-------------------*/

// function product(x,y){
//     var r = x*y;
//     return r
// }

// console.log(product(3,4))  //12

// console.log(product(3))  // 3 * undefine = NaN


/* if user does not pass argument the result will not come as expected
   so we have to declare default argument for getting result
   in this case either user pass argument or not result comes as expected
*/

/*-----------------------------------------------------*/


// function product(x,y=1){
//     var r = x*y;
//     return r
// }

// console.log(product(3,4))  //12

// console.log(product(3))  // 3 * 1 = 3


/*-----------------------------------------------------*/

function product(x,y=1,z){
    var r = x*y;
    return r
}

console.log(product(3,1,2))  //