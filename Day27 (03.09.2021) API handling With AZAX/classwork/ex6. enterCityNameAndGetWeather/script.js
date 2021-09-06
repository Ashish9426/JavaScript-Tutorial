var getData =[]


function CallAjax(city){

    var key = "a565292cd57234f39ea6a1cbac7b4ffc"
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    var http = new XMLHttpRequest();
    
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(JSON.parse(this.response))
            // document.getElementById("box").innerHTML = JSON.parse(this.response)

            var data = JSON.parse(this.response)
            console.log(typeof(data))

            getData.push(data)
            
            // getData = data.weather[0]
            console.log(typeof(getData))
            
            console.log((getData))
            BindItem(getData)

        }
        
    }
}
 

function BindItem(arr){
    var temp=``
    arr.forEach((e)=>{

        temp+=`<div class="col-4"><div class="card shadow">
        <img src="" class="card-img-top" alt="...">
        <div class="card-body">
            <h4 class="card-title">${e.name}</h4>
            <p class="card-text">${e.main.temp_min}</p>
            <p class="card-text">${e.main.temp_max}</p>
        </div>
    </div></div>`
    })

document.querySelector(".post").innerHTML=temp;
}