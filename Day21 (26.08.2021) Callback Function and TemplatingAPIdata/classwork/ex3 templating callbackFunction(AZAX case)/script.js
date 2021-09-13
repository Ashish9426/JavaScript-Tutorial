
function httpget(url,callback)
{
var http=new XMLHttpRequest()
http.open("GET",url)
http.send()
http.onreadystatechange=function(){
    if(this.readyState==4 && this.status==200)
{
    var result= JSON.parse(this.response)
    callback(result);
}
}
}

document.getElementById("btn").addEventListener("click",function(){
    httpget("https://jsonplaceholder.typicode.com/posts/",(r)=>{
    console.log(r)
    var temp=``
    r.forEach((data)=>{

        temp+=`<div class="col-4"><div class="card shadow">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${data.title}</h4>
            <p class="card-text">${data.body}</p>
        </div>
        
    </div></div>`
    })

document.querySelector(".posts").innerHTML=temp;



    })
})

document.getElementById("btn2").addEventListener("click",function(){
  httpget("https://jsonplaceholder.typicode.com/users/",(r2)=>{
    console.log(r2)

    var temp1=``
    r2.forEach((data2)=>{

        temp1+=`<div class="col-4"><div class="card shadow">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${data2.name}</h4>
            <p class="card-text">Email : ${data2.email}</p>
            <p class="card-text">Address : ${data2.address.city},${data2.address.street},${data2.address.zipcode}</p>
            <p class="card-text">UserName : ${data2.username}</p>
            <p class="card-text">Contact : ${data2.phone}</p>
            <p class="card-text">Company : ${data2.company.name},${data2.company.catchPhrase},${data2.company.bs}</p>
            <p class="card-text">Website : ${data2.website}</p>
        </div>
        
    </div></div>`
    })

document.querySelector(".posts2").innerHTML=temp1;

})
})