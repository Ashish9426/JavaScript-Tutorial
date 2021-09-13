 
// First Method
function loadpets(){

    var http=new XMLHttpRequest()
    http.open("GET","data/pets.json")
    http.send()
    http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)

        {
        var result= JSON.parse(this.response)
        console.log(result)
        }
    }


}
loadpets()



// Second Method
function loadpets(){

    fetch("data/pets.json").then(function(res){
            if(res.ok){
                res.json().then(function(result){
                    console.log(result)
                })
            }
       
    })
}
loadpets()