
/*****************Object cloning************* */

// first method
console.log("=================First Method===========================")
var obj={"name":"abc","age":23}
var obj2={}

Object.prototype.myassign=function(obj2,obj){
    for(var p in obj){
        obj2[p]=obj[p]
    }
    return obj2
}
Object.myassign(obj2,obj)
console.log(obj2)
console.log("============================================")


// first method
console.log("===================Second Method=========================")
var obj={"name":"abc","age":23}
var obj2={}

Object.prototype.myassign=function(obj2,obj){
    var obj3={}
    for(var p in obj){
        obj3[p]=obj[p]
    }
    return obj3
}
var myObject = Object.myassign(obj2,obj)
console.log(myObject)

console.log("============================================")
