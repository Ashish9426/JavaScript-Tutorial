data = []
console.log(data)

function loadpets(){

    var http=new XMLHttpRequest()
    http.open("GET","data/pets.json")
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)

        {
        var result= JSON.parse(this.response)
        console.log(result)
        data.push(result)
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
        <div class="card-body card-p">
            <div class="row">
                <div class="col col-xs-4 ">
                    <i class="far fa-comments"></i> 456
                </div>
                <div class="col col-xs-4 ">
                    <i class="far fa-heart"></i> 2.4k
                </div>
                <div class="col col-xs-4">
                    <i class="fas fa-share"></i> 99
                </div>
            </div>
        </div>
    </div></div>`
    })

document.querySelector(".post").innerHTML=temp;
}