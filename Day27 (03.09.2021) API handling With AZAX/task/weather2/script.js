var weather = [];
var x = 273.15;

function CallAjax(city) {
    var key = "21ec46344d981a5c9b3ecb0f2f68c0c4"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city} &appid=${key}`
    var http = new XMLHttpRequest();
    http.open("GET", url);
    http.send()
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(JSON.parse(this.response))

            weather = JSON.parse(this.response)
                // console.log(JSON.parse(this.response))
            // document.querySelector(".weather").innerHTML = this.response

            document.querySelector(".weather").innerHTML =  `
            
                    <h2>${weather.name}</h5>
                    <h4>Max Temp. ${weather.main.temp_max - x}</h4>
                    <h4>Min Temp. ${weather.main.temp_min - x}</h6>
                    <p>Weather description : ${weather.weather[0].description}</p>
            
            `;
            
        }
    }
}
