

function CallAjax1(){

    var key = "a565292cd57234f39ea6a1cbac7b4ffc"
    var url = `http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=${key}`
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

function CallAjax2(){

    var key = "a565292cd57234f39ea6a1cbac7b4ffc"
    var url = `http://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${key}`
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



function CallAjax3(){

    var key = "a565292cd57234f39ea6a1cbac7b4ffc"
    var url = `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`
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

function CallAjax4(){

    var key = "a565292cd57234f39ea6a1cbac7b4ffc"
    var url = `http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}`
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


function CallAjax5(){

    var key = "a565292cd57234f39ea6a1cbac7b4ffc"
    var url = `http://api.openweathermap.org/data/2.5/weather?q=Noida&appid=${key}`
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

