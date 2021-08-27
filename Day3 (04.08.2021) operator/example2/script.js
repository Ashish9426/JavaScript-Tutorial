function Product(){
    var x = window.prompt("Enter first number : ")
    var y = window.prompt("Enter second number : ")
    var z = x*y;
    alert("Result : "+z)

}

var btn = document.getElementById("btn")
btn.addEventListener("click", Product);