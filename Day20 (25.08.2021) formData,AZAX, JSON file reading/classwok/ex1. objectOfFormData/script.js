
/*

document.getElementById("frm").addEventListener("submit",function(){
event.preventDefault()
//  console.log(this)

var pets = {};
var obj = new FormData(this)

obj.forEach((e,k)=>{

    console.log(e, k)
    pets[k] = e

})
console.log(pets)

})

*/

document.getElementById("frm").addEventListener("submit",function(){
    event.preventDefault()
    //  console.log(this)
    
    var data = serialize(this)
    console.log(data)
})

function serialize(frm){
    var pets = {};
    var obj = new FormData(frm)
    
    obj.forEach((e,k)=>{
    // console.log(e, k)
    pets[k] = e
    })
return pets
}
    

     