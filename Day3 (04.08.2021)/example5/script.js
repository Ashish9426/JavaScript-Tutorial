function Product(){
    var ele = document.getElementsByName("ele");
    ele[2].value = ele[0].value*ele[1].value; 
}

var btn = document.getElementById("btn")
btn.addEventListener("click", Product);