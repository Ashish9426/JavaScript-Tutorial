function Polindrome(){

    var n = parseInt(document.getElementById("n1").value);
    var pre = 0;
    var old = n;

    while(n!=0)
    {
        var rem = n%10;
        pre = pre*10 + rem;
        n = parseInt(n/10);

    }

    console.log(pre)

    if(old == pre)
    {
        document.write("Polindrome Number")
    }
    else
    {
        document.write("Not Polindrom Number")
    }
    
}
document.getElementById("btn").addEventListener("click", Polindrome)