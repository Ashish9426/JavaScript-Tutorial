var data = []


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
        // data.push(data)
        }

        // console.log(data)
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
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcat&psig=AOvVaw2FnEj1pjVIr7ZrTEkkfU20&ust=1631532020667000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMDb1cuo-fICFQAAAAAdAAAAABAD" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${e.name}</h4>
            <p class="card-text">${e.age}</p>
            <p class="card-text">${e.weight}</p>
        </div>
        
    </div></div>`
    })

document.querySelector(".post").innerHTML=temp;
}