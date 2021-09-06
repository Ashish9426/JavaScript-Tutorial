function CallAjax1() {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Paris &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            document.querySelector(".box1").innerHTML = JSON.parse(this.response)
        }
    }
}


function CallAjax2(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            // document.getElementById("btn1").innerHTML = this.response
            document.querySelector(".box2").innerHTML = this.response
        }
    }
}

function CallAjax3(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Austin &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            // document.getElementById("btn2").innerHTML = this.response
            document.querySelector(".box3").innerHTML = this.response
        }
    }
}

function CallAjax4(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Mumbai &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            // document.getElementById("btn1").innerHTML = this.response
            document.querySelector(".box4").innerHTML = this.response
        }
    }
}

function CallAjax5(City) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=Chennai &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))
                // console.log(JSON.parse(this.response))
            // document.getElementById("btn1").innerHTML = this.response
            document.querySelector(".box5").innerHTML = this.response
        }
    }
}

// function CallAjax6(City) {
//     var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
//     var url = `https://api.openweathermap.org/data/2.5/weather?q=Delhi &appid=${key}`
//     var http = new XMLHttpRequest();
//     http.open("GET", url);
//     http.send()
//     http.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(JSON.parse(this.response))
//                 // console.log(JSON.parse(this.response))
//             document.getElementById("btn1").innerHTML = this.response
//         }
//     }
// }