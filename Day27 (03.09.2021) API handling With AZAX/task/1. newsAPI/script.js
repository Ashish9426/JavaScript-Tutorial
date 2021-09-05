

function CallAjax(country){

    var key = "dc9f64f8456f4f9a8f7e67b0e7b0e453"
    // var url = `http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${key}`
    var url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${key}`
    var http = new XMLHttpRequest();
    
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(JSON.parse(this.response))
            document.getElementById("box").innerHTML = JSON.parse(this.response)
        }
    }
}

