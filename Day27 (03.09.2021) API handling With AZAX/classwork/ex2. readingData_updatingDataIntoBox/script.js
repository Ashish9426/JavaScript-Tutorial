
/*------------------Apply condition to getting correct response-------------*/
/*------------------And Update data into box-------------*/

function CallAjax(){
    var http = new XMLHttpRequest();
    http.open("GET", "data.txt");
    http.send()
    http.onreadystatechange = function(){
        if(this.readyState==4 && this.status==200)
        {
            console.log(this.response)
            document.getElementById("box").innerHTML = this.response
        }
        //console.log(this.status)
    }
}

// Note :- AJAX have partial loding and partial rendering behavior

