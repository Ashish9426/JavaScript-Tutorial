
document.getElementById("frm").addEventListener("submit",function(){
event.preventDefault()
 
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

