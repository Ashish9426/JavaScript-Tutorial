

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

let sum = function (a) {
    return function (b) {
      return function (c) {
        return a+b+c;
      }
    }
  }
  

console.log(sum(2)(3)(4))