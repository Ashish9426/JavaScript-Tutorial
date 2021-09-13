 /*-------------------Pure Function------------------*/

// pure function is similar to "call by reference" in c Language


// function Test(obj){
//     obj.x+=10;
//     obj.y+=20
//     console.log("Inside x "+obj.x)   // 12
//     console.log("Inside y "+obj.y)   // 23
    
// }

// var o={"x":2,"y":3}
// Test(o)

// console.log("Outside x "+o.x)  // 12
// console.log("Outside y "+o.y)  // 23


/*-------------Conclusion------------------*/

// inside and out side the output will be same.
// because when we pass whole object as a argument means we pass
// reference of that object as a argument internally.
// thats why output will be same inside and outside both place.
// since reference mean no other memory will be created.
// due to this when we will change one place, then same change 
// will refelect to other place.

/*---------------------------------------------------------------*/





/*-------------------Impure Function------------------*/

// Impure function is similar to "call by value" in c Language

function Test(a,b){
    a+=10;
    b+=20
    console.log("Inside x "+a)  // 12
    console.log("Inside y "+b)  // 23
    
}

var o={"x":2,"y":3}
  Test(o.x,o.y)

    console.log("Outside x "+o.x) // 2
    console.log("Outside y "+o.y) // 3


// inside and outside output will be different.
// because value is pass as a argument