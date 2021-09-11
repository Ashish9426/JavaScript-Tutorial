var num = [3,4,5]

/****************First way****************/
var num2 = num.slice(0)
console.log(num2)

/****************Second way****************/
var num3 = [...num]
console.log(num3)


/****************third way (custom method)****************/







/****************this is wrong way to create copy of array***************/
var num4 = new Array(num)
console.log(num4)
