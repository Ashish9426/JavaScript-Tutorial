
/*-----------------------------------------------------------*/
// function add(x){
//     let sum = x;
//     function resultFn(y){
//         sum += y;
//         return resultFn;
//     }
//     resultFn.valueOf = function(){
//             return sum;
//         };
//     return resultFn;
// }

// let sum = function (a) {
//     return function (b) {
//       return function (c) {
//         return a+b+c;
//       }
//     }
//   }
  

// console.log(sum(2)(3)(4))

/*-----------------------------------------------------------*/

/*------------------generic Function-----------------------------*/

/*
function sum(x,y){
  if (y == undefined){
    return function(y){
      return x+y
    }
  }

  else
    {
      return x+y
    }
}

console.log(sum(2, 7))
console.log(sum(2)(7))
*/

/*-----------------------------------------------------------*/


/*---------------------------console.log(sum(2)(7)(3))--------------------------------*/

/*
function sum(x,y){
  if (y == undefined){
    return function(y){
      return function(z){
        return x+y+z
      }
    }
  }

  else
    {
      return x+y
    }
}

console.log(sum(2, 7))
console.log(sum(2)(7)(3))

*/

/*-----------------------------------------------------------*/


/*----------------------------console.log(sum(2)(7)(3)(2)(1)(6)())-------------------------------*/
/*-------------------------using Recursion method----------------------------------*/

function sum(x,y){
    return function inner(y){
        if(y)
        {
            x=x+y
            return inner
        }
        else{
            return x;
        }
    }
}
console.log(sum(2)(7)(3)(2)(1)(6)())

/*-----------------------------------------------------------*/