
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
    

})
})

document.getElementById("btn2").addEventListener("click",function(){
  httpget("https://jsonplaceholder.typicode.com/users/",(r2)=>{
    console.log(r2)
})
})