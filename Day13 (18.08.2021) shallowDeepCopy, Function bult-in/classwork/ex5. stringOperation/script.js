
/***************string operation*****************/
var str = new String("noida is a green city")
console.log(str.split("")) 
console.log("======================================")


/****************************************** */
var str = new String("noida is a green city")
str = str.split("")  //convert string into array
str.splice(6, 2, "are")
console.log(str)
console.log("======================================")


/**********************************************/
var str = new String("noida is a green city")
str = str.split("")  //convert string into array
str.splice(6, 2, ..."are".split(""))
console.log(str)
console.log("======================================")


/**********************************************/
var str = new String("noida is a green city")
str = str.split("")  //convert string into array
str.splice(6, 2, ..."are".split(""))
console.log(str)
console.log(str.join(""))
console.log("======================================")


/**********************************************/
var str = new String("noida is a green city")
str = str.split("") 
str.splice(6, 2, ..."are".split(""))
console.log(str.join(""))
