var env = [];
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

            env = JSON.parse(this.response)
                // console.log(JSON.parse(this.response))
            // document.querySelector(".weather").innerHTML = this.response


            switch (env.weather[0].main) {
                case 'Clear':
                    document.body.style.backgroundImage = "url('clearPicture.jpg')";
                    break;
                
                case 'Clouds':
                    document.body.style.backgroundImage = "url('cloudyPicture.jpg')";
                    break;
        
                case 'Rain':
                case 'Drizzle':
                    document.body.style.backgroundImage = "url('rainPicture.jpg')";
                    break;
        
                case 'Mist':
                    document.body.style.backgroundImage = "url('mistPicture.jpg')";
                    break;    
                
                case 'Thunderstorm':
                    document.body.style.backgroundImage = "url('stormPicture.jpg')";
                    break;
                
                case 'Snow':
                    document.body.style.backgroundImage = "url('snowPicture.jpg')";
                    break;
        
                default:
                    break;
            }

            document.querySelector(".weather").innerHTML =  `
            
                    <h2>${env.name}</h5>
                    <h4>Max Temp. ${Math.floor(env.main.temp_max - x)}</h4>
                    <h4>Min Temp. ${Math.floor(env.main.temp_min - x)}</h6>
                    <p>Weather description : ${env.weather[0].description}</p>
            
            `;
            
        }
    }
}
