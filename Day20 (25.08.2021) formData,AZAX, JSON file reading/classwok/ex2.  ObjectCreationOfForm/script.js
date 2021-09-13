
// First Method
document.getElementById("frm").addEventListener("submit",function(){
event.preventDefault()
// console.log(this)    //present object
 
var data=serialize(this)
console.log(data)
})

function serialize(frm){
    var pets={}
    var obj=new FormData(frm)
    obj.forEach((e,k)=>{
    //    console.log(e,k)
        pets[k]=e
    })
    return pets

}


/*--------------------------------------------------------------*/

// Second Method

// document.forms[0].onsubmit=function(){
// alert("hello again")
// }
