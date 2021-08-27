function Product(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    
    var z = x*y;
    document.getElementById("n3").value = z;
}

var btn = document.getElementById("btn");
btn.addEventListener("click", Product);
