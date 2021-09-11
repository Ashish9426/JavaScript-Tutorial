
/*****************Object cloning************* */

// first method
var obj={"name":"abc","age":23}
var obj2={}

Object.assign( obj2, obj)
console.log("obj2 : ", obj2)

console.log("===============================================")

// second method
var obj={"name":"abc","age":23}

Object.assign( {}, obj)
console.log("obj2 : ", obj2)
















