

// substr
var str = new String("noida is a green city")
var str2 = str.substr(str.indexOf("g"), 5)
console.log(str2)
console.log("====================================")


// substring
var str = new String("noida is a green city")
// var str2 = str.substring(str.indexOf("g"), 5)
var str2 = str.substring(str.indexOf("g"), str.indexOf("g")+5)
console.log(str2)
console.log("====================================")


// toUpper
var str = new String("noida is a green city")
var str2 = str.toUpperCase()
console.log(str2)
console.log("====================================")

// toLower
var str = new String("noida is a Green City")
var str3 = str.toLowerCase()
console.log(str3)
console.log("====================================")

// startsWith and endsWith
var url = "https://www.google.com";
if(url.startsWith("https://") || url.startsWith("http://") && url.endsWith(".com"))
{
    console.log("valid url")
}
else
{
    console.log("invalid Url")
}