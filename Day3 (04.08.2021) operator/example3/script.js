function Product(){
    var x = document.getElementById("n1").value;
    var y = document.getElementById("n2").value;
    
    var z = x*y;
    alert("Result : " + z)
}

var btn = document.getElementById("btn");
btn.addEventListener("click", Product);
