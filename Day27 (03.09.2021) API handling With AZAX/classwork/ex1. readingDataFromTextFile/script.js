/*-------------------reading File through AJAX-----------------------------*/

// function CallAjax(){
//     var http = new XMLHttpRequest();
//     http.open("GET", "data.txt");
//     http.send()
//     http.onreadystatechange = function(){
//         console.log(this.response)
//     }
// }


// Note : -
// there are 5 ready state-
    // 0 : default state nothing found.
    // 1 : request send here also nothing found
    // 2 : request processing, no response found.
    // 3 : in this state start getting response if no mistake and error. if any mistake the through error
    // 4 : request process and handling
/*----------------------------------------------*/

/*------------------Apply condition to getting correct response-------------*/

function CallAjax(){
    var http = new XMLHttpRequest();
    http.open("GET", "data.txt");
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.response)
        }
        console.log(this.status)
    }
}