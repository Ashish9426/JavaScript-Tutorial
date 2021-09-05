
/*------------------Apply condition to getting correct response-------------*/
/*------------------And Update data into box-------------*/

// function CallAjax(){
//     var http = new XMLHttpRequest();
//     http.open("GET", "https://reqres.in/api/products/3");
//     http.send()
//     http.onreadystatechange = function(){
//         if(this.readyState==4 && this.status==200)
//         {
//             console.log(this.response)
//             document.getElementById("box").innerHTML = this.response
//         }
//     }
// }

// Note :- AJAX have partial loding and partial rendering behavior


/*---------------------------------------------------*/

// function CallAjax(){
//     var http = new XMLHttpRequest();
//     http.open("GET", "https://reqres.in/api/products");
//     http.send()
//     http.onreadystatechange = function(){
//         if(this.readyState==4 && this.status==200)
//         {
//             console.log(JSON.parse(this.response))
//             document.getElementById("box").innerHTML = JSON.parse(this.response)
//         }
//     }
// }

/*---------------------------------------------------*/

function CallAjax(){
    var http = new XMLHttpRequest();
    // http.open("GET", "https://reqres.in/api/users?page=2");
    // http.open("GET", "https://reqres.in/api/unknown");
    http.open("GET", "https://reqres.in/api/users");
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(JSON.parse(this.response))
            document.getElementById("box").innerHTML = JSON.parse(this.response)
        }
    }
}