function Factorial(){
    var i = 1;
    var result = 1;
    var n = parseInt(document.getElementById("n1").value);

    console.log(n)

    while(i<=n)
    {
        result = result*i;
        
        i++
    }
    document.write(result)
}
document.getElementById("btn").addEventListener("click", Factorial)