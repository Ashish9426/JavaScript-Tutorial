var str = new String("noida is a green city")

// charAt()
var rr = str.charAt(0)
console.log(rr)
console.log("-------------------------------")


// charCodeAt()
var rrc = str.charCodeAt(0)
console.log(rrc)
console.log("-------------------------------")


// logical Question
var str = new String("noida is a green city")
var rrc = str.charCodeAt(0)
var t = rrc;
while(rrc<t+5){
    console.log(String.fromCharCode(rrc))
    rrc++
}

console.log("-------------------------------")


// logical Question
var str = new String("noida is a green city")
console.log(str.includes("is"))
console.log(str.includes("are"))
console.log("-------------------------------")




