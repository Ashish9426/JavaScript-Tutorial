console.log("========= Time Function ===========")
var dd=new Date()
console.log(dd)

console.log("============old date===============")
var dd=new Date("2015:04:21")
console.log(dd)

console.log("=============present date==========")
var dd=new Date()
console.log(dd)
console.log("year : ", dd.getFullYear())
console.log("date : ", dd.getDate())
console.log("month : ", dd.getMonth())
console.log(dd.getDay())

console.log("=============Time Zone wise time+===================")
var dd=new Date()
console.log(dd.toDateString())
console.log(dd.toTimeString())
console.log(dd.toTimeString())
console.log(dd.toString())
console.log(dd.toLocaleDateString())
console.log(dd.toLocaleTimeString())






console.log("===============example====================")
let text;
const today = new Date();
const someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
  console.log(text)
} else {
  text = "Today is after January 14, 2100.";
  console.log(text)
}


console.log("==============ECMA-6 feature=====================")
var date=Intl.DateTimeFormat("en-Us")
var dd = date.format(new Date())
console.log(dd)
console.log("-------------------------------------------")

var date=Intl.DateTimeFormat("en-Us",{datestyle:"full"})
var dd = date.format(new Date())
console.log(dd)
console.log("-------------------------------------------")

var date=Intl.DateTimeFormat("en-Us",{datestyle:"long"})
var dd = date.format(new Date())
console.log(dd)
console.log("-------------------------------------------")

var date=Intl.DateTimeFormat("en-Us",{datestyle:"medium"})
var dd = date.format(new Date())
console.log(dd)
console.log("-------------------------------------------")

var date=Intl.DateTimeFormat("en-Us",{datestyle:"short"})
var dd = date.format(new Date())
console.log(dd)





























