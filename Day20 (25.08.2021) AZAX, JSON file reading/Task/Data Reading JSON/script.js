var data = []
// console.log(data)

function loadpets(){

    var http=new XMLHttpRequest()
    http.open("GET","data/pets.json")
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)

        {
        var result= JSON.parse(this.response)
        console.log(result)
        data = result.pets
        data.push(data)
        }
        
        // console.log(pets)
        BindItem(data)
    }

}
loadpets()


// function loadpets(){


//     fetch("data/pets.json").then(function(res){
//             if(res.ok){
//                 res.json().then(function(result){
//                     console.log(result)
//                     var Pet = result.pets
//                     data.push(Pet)
//                     BindItem(data)
//                 })
                
//             }
       
//     })
    
// }
// loadpets()


function BindItem(arr){
    var temp=``
    arr.forEach((e)=>{

        temp+=`<div class="col-4"><div class="card shadow">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${e.name}</h4>
            <p class="card-text">${e.age}</p>
            <p class="card-text">${e.weight}</p>
        </div>
        
    </div></div>`
    })

document.querySelector(".post").innerHTML=temp;
}